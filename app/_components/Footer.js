
import Image from "next/image";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-gray-50 pt-70 pb-8 px-26 -mt-65 ">
      <div className="flex flex-wrap justify-center gap-40 mb-10">
        {/* Section 1 */}
        <div className="flex flex-col space-y-2  text-md text-[#6E80A3]  ">
          <Image src="/vaultL.svg" alt="vault" width={100} height={100} />
          <Link  href="/dashboard">Dashboard</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/donate-thanks">Donate Thanks</Link>
          <Link href="/page">Page</Link>
          <Link href="/admin">Admin</Link>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col space-y-2 text-md text-[#6E80A3] ">
          <h2 className="font-bold text-lg mb-2 text-[#141C24]">Products</h2>
          <Link href="/save">Tyro Vault</Link>
          <Link href="/save">Reaper Vault</Link>
          <Link href="/save">Ace Vault</Link>
          <Link href="/save">Stellar Vault</Link>
          <Link href="/save">Quick Vault</Link>
          <Link href="/save">FundMyVault</Link>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col space-y-2 text-md text-[#6E80A3] ">
          <h2 className="font-bold text-lg mb-2 text-[#141C24] ">Company</h2>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/careers">Careers</Link>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col space-y-2 text-md text-[#6E80A3]  ">
          <h2 className="font-bold text-lg mb-2 text-[#141C24] ">Legal</h2>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/dispute">Dispute</Link>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col space-y-2 text-md text-[#6E80A3] ">
          <h2 className="font-bold text-lg mb-2 text-[#141C24] ">Reach Us</h2>
          <Link href="mailto:vaultway@hello.com">vaultway@hello.com</Link>
          <Link href="tel:+2348073505624">+234 807 3505 624</Link>
          <p>10, VaultWay Street,</p>
          <p>VI, Lagos</p>
        </div>
      </div>

      {/* Divider line */}
      <hr className="border-t border-gray-400 my-2 mx-38" />

      {/* Footer Bottom */}
      <div className="flex  justify-between items-center gap-10 text-sm  text-[#6E80A3]  ">
        <div className="flex items-center gap-20  px-40">
          <p>Also Follow Us</p>
          <div className="flex gap-3">
          < FiTwitter className="text-3xl" />
          <FiFacebook  className="text-3xl" />
          <PiInstagramLogo className="text-3xl" />
          </div>
        </div>
        <p className="px-40 ">Copyright © 2025, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;


