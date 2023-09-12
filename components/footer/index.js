import Image from "next/image";
import logo from "@/public/assets/footer123.png";
import logo1 from "@/public/assets/footer.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    
    <div className="flex justify-between items-center flex-row max-lg:flex-col-reverse max-lg:gap-4 sm:mx-20 mt-10  mb-7">
      <div className="flex justify-center items-center lg:items-start flex-col md:w-4/12 ">
        <span>
        <Image src={logo1} height={300} width={300} />
        </span>

        <div className="flex justify-center items-center flex-row gap-6 my-6 ">
          <span className="h-8 w-8">
            <FaLinkedinIn className="h-full w-full" />
          </span>
          <span className="h-8 w-8">
            <AiFillInstagram className="h-full w-full" />
          </span>
          <span className="h-8 w-8">
            <AiFillYoutube className="h-full w-full" />
          </span>
        </div>
        <div className="flex justify-center items-center flex-row max-sm:flex-col gap-2 ">
          <Link href="/team">
            <button class="bg-black hover:bg-white hover:text-black text-white border-2 border-black font-bold p-2 rounded-full h-12 w-40 max-sm:w-72">
              Reviews
            </button>
          </Link>
          <Link href="/team  ">
            <button class="bg-white hover:bg-black hover:text-white text-black border-2 border-black font-bold p-2 rounded-full h-12 w-40 max-sm:w-72">
              Our Doctors
            </button>
          </Link>
        </div>
        <span className="text-sm mt-6">
          © 2035 by MAVERICKS. Powered by team MEDI + MIND MAVERICKS
        </span>
      </div>
      <div className="flex justify-center items-center flex-col gap-6 my-6 md:w-4/12 w-full">
        <div className=" flex justify-center md:justify-start items-center gap-6 w-full">
          <BsFillTelephoneInboundFill className="h-8 w-8" />
          <span>+91 8310066302</span>
        </div>
        <div className=" flex  justify-center md:justify-start items-center gap-6 w-full">
          <SiGmail className="h-8 w-8" />
          <span><a href="mailto:mavericks@gmail.com">mavericks@gmail.com</a></span>
        </div>
        <div className=" flex  justify-center md:justify-start items-center gap-6 w-full">
          <FaLocationDot className="h-8 w-8" />
          <span>Fabrication Bay near Tech Park</span>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-4/12">
        <Link href="/">
          <Image src={logo} height={200} width={400} />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
