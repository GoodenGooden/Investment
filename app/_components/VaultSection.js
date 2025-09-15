
function VaultSection({
     numericPrincipal,
  earning,
  otherMonthEarning,
  total,
  selectedVault,
})

 {


    return (
        <div>
             <p className="text-lg font-bold">Principal</p>
          <p className="text-4xl font-bold">  {(Number(numericPrincipal) || 0).toFixed(2)} </p>

          <p className="text-lg font-bold">
            First month {selectedVault?.details[1]?.value}
          </p>
          <p className="text-4xl font-bold">  {(Number(earning) || 0).toFixed(2)} </p>

          <p className="text-lg font-bold">Other month {selectedVault?.details[2]?.value}  </p>
          <p className="text-4xl font-bold"> {(Number(otherMonthEarning) || 0).toFixed(2)} </p>

          <p className="text-lg font-bold">Duration</p>
          <p className="text-4xl font-bold">{selectedVault?.details[0]?.value}</p>

          <p className="text-lg font-bold">Total Earnings</p>
          <p className="text-4xl font-bold"> {(Number(total) || 0).toFixed(2)} </p>

        </div>
    )
}

export default VaultSection

