

"use client";
import { useEffect, useState } from "react";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Debit() {
  const [user] = useAuthState(auth);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "users", user.uid, "transactions"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const txs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(txs);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="w-full p-4 sm:p-6 bg-white rounded-xl shadow-sm">
      <p className="text-lg sm:text-xl font-semibold mb-4 text-[#141C24]">
        History
      </p>

      {transactions.length === 0 ? (
        <p className="text-[#6E80A3] text-sm sm:text-base">
          No transactions yet
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col gap-2 border-b  border-[#E3EDF3] pb-3 last:border-0 last:pb-0"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2 text-[#141C24] min-w-0">
                  {tx.type === "credit" ? (
                    <GoArrowDownLeft className="text-green-500 shrink-0" size={20} />
                  ) : (
                    <GoArrowUpRight className="text-red-500 shrink-0" size={20} />
                  )}
                  <p className="font-medium truncate">{tx.description}</p>
                </div>
                <p className="text-xs sm:text-sm text-[#6E80A3] shrink-0">
                  {tx.createdAt?.toDate
                    ? tx.createdAt.toDate().toLocaleDateString()
                    : ""}
                </p>
              </div>

              {/* Bottom row */}
              <div className="flex justify-between text-xs sm:text-sm text-[#6E80A3]">
                <p
                  className={
                    tx.status === "Completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {tx.status}
                </p>
                <p className="text-[#141C24] font-semibold text-sm sm:text-base">
                  ₦{tx.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Debit;
