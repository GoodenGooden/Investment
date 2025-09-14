
import Link from "next/link";

function Button({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`
        inline-block text-center
        py-2 px-4 
        sm:py-2.5 sm:px-6 
        md:py-3 md:px-8 
        bg-[#00A343] text-white font-medium 
        rounded-md transition duration-200 
        hover:bg-[#008C3A] active:scale-95
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

export default Button;
