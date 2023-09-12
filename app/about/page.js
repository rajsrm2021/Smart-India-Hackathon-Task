import Image from "next/image";
import logo9 from "@/public/assets/log.png";
import srmImage from "../../components/assets/Srmseal.png";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="container my-10 md:mx-auto flex flex-col md:flex-row border-4 p-6 md:p-12 justify-between items-center border-black rounded-3xl space-y-10 md:space-x-40 bg-white">
      <div>
        <Image src={logo9} width={2500} height={2500} />
      </div>

      <div className="flex flex-col justify-between items-center space-y-10 md:space-y-20">
        <div className="text-lg md:text-3xl ">
          HealthAI MedTech is a pioneering medicinal web app driven by
          cutting-edge AI technology, offering users the convenience of face
          authentication, real-time chat with doctors, and image analysis for
          risk assessment. Our dedicated team of medical experts and engineers
          is committed to revolutionizing healthcare by making it accessible,
          personalized, and secure. With a strong emphasis on privacy and data
          protection, we empower individuals to take control of their health,
          providing timely insights, guidance, and peace of mind. Join us on
          this transformative journey toward a healthier future.
        </div>
        <Link href="/career" className="flex justify-end w-full">
          <button className="border-2 border-black rounded-full p-4 ">
            <GrNext />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default AboutPage;
