// import More from "./more";
import logo1 from "@/public/assets/image2.png";
import logo2 from "@/public/assets/image3.png";
import logo3 from "@/public/assets/image4.png";
import logo4 from "@/public/assets/apple.png";
import logo5 from "@/public/assets/logo5.jpg";
import logo6 from "@/public/assets/logo6.jpg";
import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="bg-[#fffcf8] flex flex-row justify-center w-full">
      <div className="bg-[#fffcf8] overflow-hidden w-[1440px] h-[2400px] relative">
        <div className="absolute w-[1407px]  left-[6px]">
          <div className="absolute w-[72px] h-[72px] top-[1275px] left-[1260px] bg-[#fffcf8] rounded-[36px] border-[3px] border-solid border-black">
            <img
              className="absolute w-[19px] h-[34px] top-[16px] left-[24px]"
              alt="Vector"
              src="vector.svg"
            />
          </div>
          <div className="relative w-[1407px] h-[2255px] top-1 left-0">
            <div className="absolute w-[1293px] h-[392px] top-[167px] left-[10px] bg-[#fffcf8] rounded-[58px] border-4 border-solid border-black">
              <p className="absolute top-[75px] left-[104px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[normal]">
                The worlds first <br />
                AI Health Checker <br />
                HIV is here
              </p>
            </div>
            <p className="absolute top-[705px] left-[30px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[normal]">
              Health Tips for the Day:
            </p>
            <div className="absolute top-[1523px] left-[51px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[normal]">
              Medicinal Belief:
            </div>
            <div className="left-[23px] absolute w-[420px] h-[405px] top-[848px] bg-[#fffcf8] rounded-[22px] overflow-hidden border border-solid border-black">
              <Image
                className="absolute w-[420px] h-[230px] top-0 left-0 object-cover"
                src={logo4}
                height={100}
                width={100}
              />
              <div className="absolute w-[223px] top-[258px] left-[19px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Apple Insider
              </div>
              <div className="absolute w-[172px] h-[37px] top-[309px] left-[16px]">
                <div className="w-[174px] h-[37px]">
                  <div className="relative w-[172px] h-[37px] bg-[#fffcf8] rounded-[43px] border border-solid border-black">
                    <div className="absolute top-[7px] left-[11px] [font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal]">
                      Dr. Samayra Pandey
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[50px] h-[50px] top-[341px] left-[352px] shadow-[0px_2.77px_6.22px_#00000008,0px_6.65px_12.49px_#0000000b,0px_12.52px_20.07px_#0000000e,0px_22.34px_30.11px_#00000011,0px_41.78px_45.09px_#00000014,0px_100px_80px_#0000001c]">
                <div className="relative h-[50px] bg-[#06a532] rounded-[25px]">
                <img
                    className="absolute w-[13px] h-[23px] top-[14px] left-[19px]"
                    alt="Vector"
                    src="vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="left-[502px] absolute w-[420px] h-[405px] top-[848px] bg-[#fffcf8] rounded-[22px] overflow-hidden border border-solid border-black">
            <Image
                className="absolute w-[420px] h-[230px] top-0 left-0 object-cover"
                src={logo5}
                height={100}
                width={100}
              />
              <div className="absolute w-[223px] top-[258px] left-[19px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Take Multivitamin
              </div>
              <div className="absolute w-[172px] h-[37px] top-[309px] left-[16px]">
                <div className="w-[174px] h-[37px]">
                  <div className="relative w-[172px] h-[37px] bg-[#fffcf8] rounded-[43px] border border-solid border-black">
                    <div className="absolute top-[7px] left-[11px] [font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal]">
                      Dr. Raj Kumar
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[50px] h-[50px] top-[341px] left-[352px] shadow-[0px_2.77px_6.22px_#00000008,0px_6.65px_12.49px_#0000000b,0px_12.52px_20.07px_#0000000e,0px_22.34px_30.11px_#00000011,0px_41.78px_45.09px_#00000014,0px_100px_80px_#0000001c]">
                <div className="relative h-[50px] bg-[#06a532] rounded-[25px]">
                  <img
                    className="absolute w-[13px] h-[23px] top-[14px] left-[19px]"
                    alt="Vector"
                    src="vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="left-[981px] absolute w-[420px] h-[405px] top-[848px] bg-[#fffcf8] rounded-[22px] overflow-hidden border border-solid border-black">
            <Image
                className="absolute w-[420px] h-[230px] top-0 left-0 object-cover"
                src={logo6}
                height={100}
                width={100}
              />
              <div className="absolute w-[223px] top-[258px] left-[19px] [font-family:'Montserrat-Bold',_Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Get Enough Good Sleep
              </div>
              <div className="absolute w-[172px] h-[37px] top-[309px] left-[16px]">
                <div className="w-[174px] h-[37px]">
                  <div className="relative w-[172px] h-[37px] bg-[#fffcf8] rounded-[43px] border border-solid border-black">
                    <div className="absolute top-[7px] left-[11px] [font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal]">
                      Dr. Suraj Mahapatra
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[50px] h-[50px] top-[341px] left-[352px] shadow-[0px_2.77px_6.22px_#00000008,0px_6.65px_12.49px_#0000000b,0px_12.52px_20.07px_#0000000e,0px_22.34px_30.11px_#00000011,0px_41.78px_45.09px_#00000014,0px_100px_80px_#0000001c]">
                <div className="relative h-[50px] bg-[#06a532] rounded-[25px]">
                  <img
                    className="absolute w-[13px] h-[23px] top-[14px] left-[19px]"
                    alt="Vector"
                    src="vector-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-[1263px] h-[587px] top-[1668px] left-[19px]">
              <div className="relative w-[1265px] h-[587px]">
                <div className="absolute w-[1263px] h-[220px] top-[367px] left-0">
                  <div className="w-[1265px] h-[220px]">
                    <div className="relative w-[1263px] h-[220px] bg-[#ffe6c6] rounded-[26px] shadow-[0px_2.77px_2.21px_#00000005,0px_6.65px_5.32px_#00000007,0px_12.52px_10.02px_#00000009,0px_22.34px_17.87px_#0000000b,0px_41.78px_33.42px_#0000000d,0px_100px_80px_#00000012]">
                      <p className="absolute top-[45px] left-[37px] [font-family:'Open_Sans_Hebrew-Regular',_Helvetica] font-normal text-transparent text-[96px] tracking-[0] leading-[normal]">
                        <span className="text-black">WE CARE </span>
                        <span className="text-black">YOUR</span>
                        <span className="[font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-black">
                          &nbsp;
                        </span>
                        <span className="[font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-[#94704F]">
                          SKIN
                        </span>
                      </p>
                      <Image
                        className="absolute right-5 top-14 "
                        src={logo3}
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[1265px] h-[220px] top-[191px] left-0">
                  <div className="relative w-[1263px] h-[220px] bg-[#f0ffe4] rounded-[26px] shadow-[0px_2.77px_2.21px_#00000005,0px_6.65px_5.32px_#00000007,0px_12.52px_10.02px_#00000009,0px_22.34px_17.87px_#0000000b,0px_41.78px_33.42px_#0000000d,0px_100px_80px_#00000012]">
                    <p className="absolute top-[45px] left-[37px] [font-family:'Open_Sans_Hebrew-Regular',_Helvetica] font-normal text-transparent text-[96px] tracking-[0] leading-[normal]">
                      <span className="text-black">THE </span>
                      <span className="[font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-[#00c737]">
                        HERBAL
                      </span>
                      <span className="[font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-black">
                        &nbsp;
                      </span>
                      <span className="text-black">POWER</span>
                    </p>
                    <Image
                      className="absolute right-5 top-10 "
                      src={logo1}
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
                <div className="absolute w-[1265px] h-[220px] top-0 left-0">
                  <div className="relative w-[1263px] h-[220px] bg-[#ffbfbf] rounded-[26px] shadow-[0px_2.77px_2.21px_#00000005,0px_6.65px_5.32px_#00000007,0px_12.52px_10.02px_#00000009,0px_22.34px_17.87px_#0000000b,0px_41.78px_33.42px_#0000000d,0px_100px_80px_#00000012]">
                    <Image
                      className="absolute right-5 top-10 animate-fade-in "
                      src={logo2}
                      height={100}
                      width={100}
                    />
                    <p className="absolute top-[44px] left-[62px] [font-family:'Open_Sans_Hebrew-Regular',_Helvetica] font-normal text-transparent text-[96px] tracking-[0] leading-[normal]">
                      <span className="text-black">No Shame for </span>
                      <span className="[font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-[#fa0000]">
                        HIV
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[73px] left-[1249px] [font-family:'Open_Sans_Hebrew-Bold',_Helvetica] font-bold text-[#fffcf8] text-[32px] tracking-[0] leading-[normal]">
            NLP
          </div>
        </div>
        {/* <div className="absolute w-[1313px] h-[362px] top-[2464px] left-[63px] bg-[#fffcf8] rounded-[33px] border border-solid border-black" /> */}
      </div>
    </div>
  );
};
export default UserInfo;

import React from "react";
