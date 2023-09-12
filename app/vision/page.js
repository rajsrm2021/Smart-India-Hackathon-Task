import Image from "next/image"
import img from "../../public/assets/img.jpg"
const VisionPage = ()=>{
    return(
        <div className="my-10 flex flex-col justify-center items-center gap-y-10 text-black bg-[#fffcf8]">
            <button className="w-96 py-4 rounded-3xl text-center font-bold text-3xl text-white tracking-wide bg-[#0000FF] mt-7 ">HEALTH CHECKER AI</button>
            <h1 className="text-3xl font-bold">Upload Images</h1>
            <div className="flex justify-center  items-center gap-10  w-4/5">
                <div className="rounded-3xl h-60 w-96 border-2 border-black"></div>
                <div className="rounded-3xl h-60 w-96 border-2 border-black"></div>
                <div className="rounded-3xl h-60 w-96 border-2 border-black"></div>              
            </div>
            <div className="flex justify-end items-center w-4/5">
                <button className="w-60 py-4 rounded-3xl text-center font-bold text-3xl text-white tracking-wide bg-[#00A42E]">Upload</button>
            </div>
            <div className="flex justify-start items-center w-4/5">
                <button className="w-60 py-4 rounded-3xl text-center font-bold text-3xl mt-10 tracking-wide ">Possible Risks</button>
            </div>
            <div className="rounded-3xl h-[80vh] w-4/5 border-2 border-black shadow-xl"></div>
            <div className="flex justify-start items-center w-4/5">
                <button className="w-60 py-4 rounded-3xl text-center font-bold text-3xl mt-10 tracking-wide ">RECOMMENDATIONS:</button>
            </div>
            <div className="rounded-3xl h-[80vh] w-4/5 flex justify-end items-end">
                <Image alt="image" height={200} width={200} src={img}/>
            </div>
            <div className="flex justify-start items-center w-4/5">
                <button className="w-60 py-4 text-black rounded-3xl text-center font-bold text-3xl mt-10 tracking-wide ">RESULTS:</button>
            </div>
            <button className="w-1/3 py-4 rounded-3xl text-center font-bold text-3xl h-20 flex justify-center items-center tracking-wide backdrop-blur bg-[#00000050]"></button>
            <button className="w-1/3 py-4 rounded-3xl text-center font-bold text-3xl h-20 flex justify-center items-center tracking-wide backdrop-blur bg-[#00000050] mb-7"></button>
        </div>
    )
}
export default VisionPage