
import Link from "next/link"

function Buttonn({href, children, className = "" }) {
    return (
    <Link
      href={href}
      className= { `  text-sm px-[22px] py-[8px] text-[#00A343] rounded-md border border-red-[#00A343] ${className}` }
    >
      {children}
    </Link>

    )
}

export default Buttonn
