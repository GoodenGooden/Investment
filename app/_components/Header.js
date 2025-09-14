
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/inv.jpeg"
          alt="logo"
          width={70}
          height={20}
          quality={50}
        />
      </div>

      {/* Right: Links */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/login"
          className="px-4 py-2 border border-[#00A343] text-[#00A343] rounded-lg text-sm hover:bg-[#00A343] hover:text-white transition"
        >
          Log In
        </Link>

        <Button href="/signup">Create An Account</Button>
      </div>
    </header>
  );
}

export default Header;
