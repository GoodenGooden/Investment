
"use client";
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, onSnapshot, updateDoc, setDoc, arrayUnion, collection, addDoc, serverTimestamp } from "firebase/firestore";

const VaultContext = createContext();

export function VaultProvider({ children }) {
  const [user] = useAuthState(auth);
  const [vaults, setVaults] = useState([]);
  const [walletAmount, setWalletAmount] = useState(0); // wallet balance
  const [transactions, setTransactions] = useState([]); // ✅ new state for transactions
  const [loadingUserData, setLoadingUserData] = useState(true);
  const [userData, setUserData] = useState(null);

  const [selectedVault, setSelectedVault] = useState(null);
  const [maturityDate, setMaturityDate] = useState(null);
  const [principal, setPrincipal] = useState(0);
  const [earning, setEarning] = useState(0);
  const [otherMonthEarning, setOtherMonthEarning] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [total, setTotal] = useState(0);
   const [isVisible, setIsVisible] = useState(false); 


  // 👇 Listen to Firestore for changes in user document
  useEffect(() => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();

        setUserData(data); 
        setWalletAmount(data.walletAmount || 0);
        setVaults(data.vaults || []);
      } else {
        // create default doc if none exists
        setDoc(userRef, { walletAmount: 0, vaults: [] });
      }
        setLoadingUserData(false);

    });

    return () => unsubscribe();
  }, [user]);

  // 👇 Listen for transactions in subcollection
  useEffect(() => {
    if (!user) return;
    const txRef = collection(db, "users", user.uid, "transactions");

    const unsubscribe = onSnapshot(txRef, (snap) => {
      setTransactions(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  // 👇 Deduct balance and log debit
  const deductBalance = useCallback(
    async (amount, description = "Wallet debit") => {
      if (!user) return;

      try {
        const userRef = doc(db, "users", user.uid);

        // 🔹 Get latest balance
        const snap = await getDoc(userRef);
        const currentBalance = snap.exists() ? snap.data().walletAmount || 0 : 0;

        // 🔹 Prevent overdraft
        const newBalance = Math.max(currentBalance - (amount || 0), 0);

        // 1️⃣ Optimistically update local state
        setWalletAmount(newBalance);

        // 2️⃣ Update Firestore balance
        await updateDoc(userRef, { walletAmount: newBalance });

        // 3️⃣ Add debit transaction
        await addDoc(collection(db, "users", user.uid, "transactions"), {
          type: "debit",
          amount,
          description,
          status: "Completed",
          createdAt: serverTimestamp(),
        });
      } catch (err) {
        console.error("Error deducting balance:", err);
      }
    },
    [user]
  );

  // 👇 Add vault and deduct funds
  const addVault = useCallback(
    async (vault) => {
      if (!user) return;

      try {
        // 🔹 Deduct from wallet + log debit transaction
        await deductBalance(vault?.principal || 0, "Vault Created");

        // 🔹 Save vault in user's document
        const vaultWithId = {
          id: Date.now().toString(),
          ...vault,
        };

        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          vaults: arrayUnion(vaultWithId),
        });
      } catch (err) {
        console.error("Error adding vault:", err);
      }
    },
    [user, deductBalance]
  );

  // Calculations
  const totalEarn = vaults.reduce(
    (sum, v) => sum + (Number(v.earning) || 0) + (Number(v.otherMonthEarning) || 0),
    0
  );

  const totalPrincipal = vaults.reduce((sum, v) => sum + Number(v.principal || 0), 0);

  const vaultBalance = totalPrincipal + totalEarn;

  const value = useMemo(
    () => ({
      selectedVault,
      setSelectedVault,
      maturityDate,
      setMaturityDate,
      principal,
      setPrincipal,
      earning,
      setEarning,
      loadingUserData,
      setLoadingUserData,
      isVisible,
       setIsVisible,
      otherMonthEarning,
      setOtherMonthEarning,
      selectedOption,
      setSelectedOption,
      userData,
       setUserData,
      total,
      setTotal,
      vaults,
      walletAmount,
      transactions, // ✅ expose transactions
      totalPrincipal,
      totalEarn,
      vaultBalance,
      addVault,
      deductBalance,
    }),
    [
      selectedVault,
      maturityDate,
      principal,
      addVault,
      deductBalance,
      userData,
      earning,
      otherMonthEarning,
      selectedOption,
      isVisible,
      total,
      loadingUserData,
      vaults,
      walletAmount,
      transactions, // ✅ include in memo
      totalPrincipal,
      totalEarn,
      vaultBalance,
    ]
  );

  return <VaultContext.Provider value={value}>{children}</VaultContext.Provider>;
}

export const useVault = () => useContext(VaultContext);










/*

"use client";
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, onSnapshot, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const VaultContext = createContext();

export function VaultProvider({ children }) {
  const [user] = useAuthState(auth);
  const [vaults, setVaults] = useState([]);
  const [walletAmount, setwalletAmount] = useState(0);    //balance is for wallet balance

  const [selectedVault, setSelectedVault] = useState(null);
  const [maturityDate, setMaturityDate] = useState(null);
  const [principal, setPrincipal] = useState(0);
  const [earning, setEarning] = useState(0);
  const [otherMonthEarning, setOtherMonthEarning] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [total, setTotal] = useState(0);

  // 👇 Listen to Firestore for changes
  useEffect(() => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setwalletAmount(data.walletAmount || 0);
        setVaults(data.vaults || []);
      } else {
        // create default doc if none exists
        setDoc(userRef, { walletAmount: 0, vaults: [] });
      }
    });

    return () => unsubscribe();
  }, [user]);

   
const deductBalance = useCallback(
  async (amount, description = "Wallet debit") => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);

      // 🔹 Get latest balance
      const snap = await getDoc(userRef);
      const currentBalance = snap.exists() ? snap.data().walletAmount || 0 : 0;

      // 🔹 Prevent overdraft
      const newBalance = Math.max(currentBalance - (amount || 0), 0);

      // 1️⃣ Update wallet balance
      await updateDoc(userRef, { walletAmount: newBalance });
      
      // 2️⃣ Add debit transaction
      await addDoc(collection(db, "users", user.uid, "transactions"), {
        type: "debit",
        amount,
        description, // 👈 e.g. "Vault Created"
        status: "Completed",
        createdAt: serverTimestamp(),
      });

    } catch (err) {
      console.error("Error deducting balance:", err);
    }
  },
  [user]
);


const addVault = useCallback(
  async (vault) => {
    if (!user) return;

    try {
      // 🔹 Deduct from wallet + log debit transaction
      await deductBalance(vault?.principal || 0, "Vault Created");

      // 🔹 Save vault in user's document
      const vaultWithId = {
        id: Date.now().toString(),
        ...vault,
      };

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        vaults: arrayUnion(vaultWithId),
      });

       } catch (err) {
      console.error("Error adding vault:", err);
    }
  },
  [user, deductBalance]
);


  const totalEarn = vaults.reduce(
    (sum, v) => sum + (Number(v.earning) || 0) + (Number(v.otherMonthEarning) || 0),
    0
  );

  const totalPrincipal = vaults.reduce(
    (sum, v) => sum + Number(v.principal || 0),
    0
  );

  const vaultBalance = totalPrincipal + totalEarn;

  const value = useMemo(
    () => ({
      selectedVault, setSelectedVault,
      maturityDate, setMaturityDate,
      principal, setPrincipal,
      earning, setEarning,
      otherMonthEarning, setOtherMonthEarning,
      selectedOption, setSelectedOption,
      total, setTotal,
      vaults,
      walletAmount,
      totalPrincipal,
      totalEarn,
      vaultBalance,
      addVault,
      deductBalance,
    }),
    
    [
      selectedVault, maturityDate, principal, addVault, deductBalance, earning, otherMonthEarning,
      selectedOption, total, vaults, walletAmount, totalPrincipal, totalEarn, vaultBalance
    ]
  );

  return (
    <VaultContext.Provider value={value}>
      {children}
    </VaultContext.Provider>
  );
}

export const useVault = () => useContext(VaultContext);




*/










