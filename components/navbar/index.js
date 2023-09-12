import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "../../public/assets/logo1.png";
import Logo2 from "../../public/assets/logo2.png";
import logo1 from "@/public/assets/footer.png";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          MEDI + MAVERICKS
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/team"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/vision"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Medi AI
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/sponsors"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Medi Bot
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter z-50 relative drop-shadow-md bg-[#fffcf8] px-4 py-4 h-20 items-center flex-row justify-between">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center gap-x-6">
      <Image src={logo1} height={300} width={300} />
      </div>
      <div className="flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className=" hover:bg-[#bc9b76] hover:text-white px-2 py-1 rounded-md transition"
          >
            Home
          </Link>
          <Link
            href="/team"
            className=" hover:bg-[#bc9b76] hover:text-white px-2 py-1 rounded-md transition"
          >
            Doctors
          </Link>
          <Link
            href="/vision"
            className=" hover:bg-[#bc9b76] hover:text-white px-2 py-1 rounded-md transition"
          >
            Medi AI
          </Link>
          <Link
            href="https://648ec72b2348aa1320ce5f6a--glittery-rugelach-4860ca.netlify.app/"
            className=" hover:bg-[#bc9b76] hover:text-white px-2 py-1 rounded-md transition"
          >
            Medi Bot
          </Link>
          <Link
            href="/about"
            className=" hover:bg-[#bc9b76] hover:text-white px-2 py-1 rounded-md transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
