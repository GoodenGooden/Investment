"use client";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { LuWalletCards } from "react-icons/lu";
import BalanceCard from "./BalanceCard";

import { useVault } from "./VaultContext";
import Link from "next/link";
import Debit from "./Debit";

function BalanceA() {
  const { vaultBalance, walletAmount, isVisible, vaults, loadingUserData } =
    useVault(); // ✅ from context

  if (loadingUserData) {
    return (
      <div className="p-4 bg-[#F4FFF8]">
        <p className="text-gray-500">Loading balances...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#F4FFF8] h-auto">
      {/* Responsive Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {walletAmount === undefined ? (
          <p>Loading balance...</p>
        ) : (
          <BalanceCard
            label="Wallet Balance"
            value={isVisible ? "****" : `₦${walletAmount?.toLocaleString()}`}
            icon={
              <MdOutlineAccountBalanceWallet
                size={20}
                className="text-[#00A343]"
              />
            }
          />
        )}

        <BalanceCard
          label="Vault Balance"
          value={isVisible ? "****" : `₦${vaultBalance?.toLocaleString()}`}
          icon={<IoWalletOutline size={20} className="text-[#00A343]" />}
        />

        <BalanceCard
          label="Vault Created"
          value={vaults.length}
          icon={<GiWallet size={20} className="text-[#00A343]" />}
        />

        <Link href="/dashboard/fund" className="block">
          <BalanceCard
            label="Fund My Wallet"
            value="With Paystack"
            icon={<LuWalletCards size={20} className="text-[#00A343]" />}
          />
        </Link>
      </div>

      {/* Debit History Section */}
      <div className="p-6 sm:p-10">
        <Debit />
      </div>
    </div>
  );
}

export default BalanceA;
