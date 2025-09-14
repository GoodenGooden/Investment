
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useVault } from "./vaultContext";

function VaultRegH({ selectedOption, principal, selectedDate, frequency }) {
  const { selectedVault, setMaturityDate, setPrincipal, total } = useVault(); // ⬅ added setPrincipal

  // Format function
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let maturityFormatted = "";

  if (selectedDate && selectedVault) {
    const months = parseInt(selectedVault.details[0]?.value);

    const startDate = new Date(selectedDate);
    const maturity = new Date(startDate);
    maturity.setMonth(startDate.getMonth() + months);

    maturityFormatted = formatDate(maturity);
  }

  // ✅ Save into context whenever they change
  useEffect(() => {
    if (maturityFormatted) {
      setMaturityDate(maturityFormatted);
    }
    if (principal) {
      setPrincipal(principal);
    }
  }, [maturityFormatted, principal, setMaturityDate, setPrincipal]);

  // If missing data → show nothing
  if (!selectedDate || !selectedVault) return null;

  return (
    <div className="p-6">
      <p className="text-5xl font-bold text-[#8194bb] py-4">
        Check out what your vault looks like
      </p>

      <div className="grid grid-cols-2 gap-y-6 text-[#8194bb]">
        <p className="text-lg font-bold">Safe Name</p>
        <p className="text-2xl font-bold">{selectedOption}</p>

        <p className="text-lg font-bold">Principal</p>
        <p className="text-2xl font-bold">{principal}</p>

        <p className="text-lg font-bold">Interest P/A</p>
        <p className="text-2xl font-bold">xxxxxx</p>

        <p className="text-lg font-bold">Start date</p>
        <p className="text-2xl font-bold">{selectedDate}</p>

        <p className="text-lg font-bold">Maturity date</p>
        <p className="text-2xl font-bold">{maturityFormatted}</p>

        <p className="text-lg font-bold">Frequency</p>
        <p className="text-2xl font-bold">{frequency}</p>

        <p className="text-lg font-bold">Estimated returns</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="flex flex-col gap-6 mt-8">
        <p className="text-xl font-semibold text-[#8194bb]">Looking great 🎉</p>

        <Link href="/dashboard/vaults/success">
          <button className="mt-4 py-3 px-16 bg-[#00A343] text-white rounded-full shadow-md hover:bg-[#008c38] transition">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VaultRegH;





/*

"use client"

import Link from "next/link";
import Button from "./Button";
import { useVault } from "./vaultContext";


function VaultRegH({ selectedOption, principal, selectedDate, frequency, total }) {

  const { selectedVault, setMaturityDate  } = useVault();

  if (!selectedDate || !selectedVault) return null;

  // extract months (e.g. "12 months" → 12)
  const months = parseInt(selectedVault.details[0]?.value);

  // calculate maturity date
  const startDate = new Date(selectedDate);
  const maturity = new Date(startDate);
  maturity.setMonth(startDate.getMonth() + months);

  // format as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

 // const startFormatted = formatDate(startDate);
  const maturityFormatted  = formatDate(maturity);
setMaturityDate(maturityFormatted)
  return (
    <div className="p-6">
      <p className="text-5xl font-bold text-[#8194bb] py-4">
        Check out what your vault looks like
      </p>

      
      <div className="grid grid-cols-2 gap-y-6 text-[#8194bb]">
        <p className="text-lg font-bold">Safe Name</p>
        <p className="text-2xl font-bold">{selectedOption}</p>

        <p className="text-lg font-bold">Principal</p>
        <p className="text-2xl font-bold">{principal}</p>

        <p className="text-lg font-bold">Interest P/A</p>
        <p className="text-2xl font-bold">xxxxxx</p>

        <p className="text-lg font-bold">Start date</p>
        <p className="text-2xl font-bold">{selectedDate}</p>

        <p className="text-lg font-bold">Maturity date</p>
        <p className="text-2xl font-bold"> { maturityFormatted } </p>

        <p className="text-lg font-bold">Frequency</p>
        <p className="text-2xl font-bold">{frequency}</p>

        <p className="text-lg font-bold">Estimated returns</p>
        <p className="text-2xl font-bold"> {total} </p>
      </div>

      <div className="flex flex-col  gap-6 mt-8">
      <p className="text-xl font-semibold text-[#8194bb]">Looking great 🎉</p>

      <Link href="/dashboard/vaults/success">
        <button className="mt-4 py-3 px-16 bg-[#00A343] text-white rounded-full shadow-md hover:bg-[#008c38] transition">
          Finish
        </button>
      </Link>
    </div>

    </div>
  );
}

export default VaultRegH;

*/