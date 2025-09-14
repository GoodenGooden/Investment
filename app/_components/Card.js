
"use client";

import { useState } from "react";
import CreateCard from "./CreateCard";
import {
  TbHexagonNumber2,
  TbHexagonNumber4,
  TbHexagonNumber6,
  TbNumber12Small,
} from "react-icons/tb";
import { useVault } from "./vaultContext";
import { useRouter } from "next/navigation";

export default function Card() {
  const { setSelectedVault } = useVault();
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (vault, key) => {
    setSelectedVault(vault);
    setActiveCard(key);
    router.push("/dashboard/vaults/regular-vault");
  };

  return (
    <div
      className="
        grid gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        text-[#6E80A3]
      "
    >
      {/* Regular Vault */}
      <div
        onClick={() =>
          handleCardClick(
            {
              title: "Regular vault",
              details: [
                { label: "Duration", value: "2 months" },
                { label: "1st month", value: "5% interest" },
                { label: "Other", value: "1% interest" },
              ],
            },
            "regular"
          )
        }
        className={`rounded-2xl cursor-pointer transition-all ${
          activeCard === "regular"
            ? "border-2 border-green-500 shadow-lg scale-105"
            : "border border-transparent hover:shadow-md"
        }`}
      >
        <CreateCard
          title="Regular vault"
          icon={<TbHexagonNumber2 />}
          details={[
            { label: "Duration", value: "2 months" },
            { label: "1st month", value: "5% interest" },
            { label: "Other", value: "1% interest" },
          ]}
        />
      </div>

      {/* Premium Vault */}
      <div
        onClick={() =>
          handleCardClick(
            {
              title: "Premium vault",
              details: [
                { label: "Duration", value: "4 months" },
                { label: "1st month", value: "10% interest" },
                { label: "Other", value: "2% interest" },
              ],
            },
            "premium"
          )
        }
        className={`rounded-2xl cursor-pointer transition-all ${
          activeCard === "premium"
            ? "border-2 border-green-500 shadow-lg scale-105"
            : "border border-transparent hover:shadow-md"
        }`}
      >
        <CreateCard
          title="Premium vault"
          icon={<TbHexagonNumber4 />}
          details={[
            { label: "Duration", value: "4 months" },
            { label: "1st ", value: "10% interest" },
            { label: "Other", value: "2% interest" },
          ]}
        />
      </div>

      {/* Exclusive Vault */}
      <div
        onClick={() =>
          handleCardClick(
            {
              title: "Exclusive vault",
              details: [
                { label: "Duration", value: "6 months" },
                { label: "1st month", value: "15% interest" },
                { label: "Other", value: "3% interest" },
              ],
            },
            "exclusive"
          )
        }
        className={`rounded-2xl cursor-pointer transition-all ${
          activeCard === "exclusive"
            ? "border-2 border-green-500 shadow-lg scale-105"
            : "border border-transparent hover:shadow-md"
        }`}
      >
        <CreateCard
          title="Exclusive vault"
          icon={<TbHexagonNumber6 />}
          details={[
            { label: "Duration", value: "6 months" },
            { label: "1st ", value: "15% interest" },
            { label: "Other", value: "3% interest" },
          ]}
        />
      </div>

      {/* Deluxe Vault */}
      <div
        onClick={() =>
          handleCardClick(
            {
              title: "Deluxe vault",
              details: [
                { label: "Duration", value: "12 months" },
                { label: "1st month", value: "20% interest" },
                { label: "Other", value: "4% interest" },
              ],
            },
            "deluxe"
          )
        }
        className={`rounded-2xl cursor-pointer transition-all ${
          activeCard === "deluxe"
            ? "border-2 border-green-500 shadow-lg scale-105"
            : "border border-transparent hover:shadow-md"
        }`}
      >
        <CreateCard
          title="Deluxe vault"
          icon={<TbNumber12Small />}
          details={[
            { label: "Duration", value: "12 months" },
            { label: "1st ", value: "20% interest" },
            { label: "Other", value: "4% interest" },
          ]}
        />
      </div>
    </div>
  );
}
