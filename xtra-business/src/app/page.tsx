import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Image
        src="/slider-layer-1.webp"
        alt="Slider Layer 1"
        width={1370}
        height={900}
        className="w-[85%] h-auto absolute -top-4 -right-40 z-0"
      />
        <div className="flex flex-row items-center  justify-between rounded-full shadow-lg bg-white z-5 w-[90%] m-10 absolute top-5">
          <Image
            src="/logo-nav.png"
            alt="Logo"
            width={200}
            height={48}
          />
          <div  className="flex gap-6 font-asap">
            <ul className="flex flex-row gap-6 items-center justify-center w-full text-[#636363] font-asap font-bold text-[16px]">
              <li className="text-[#55C48B] relative"><a href="#home">Home</a><div className="absolute -left-4 -top-1 -z-1 h-10 w-10 bg-[#01849F14] rounded-full"></div></li>
              <li><a href="#home">About</a></li>
              <li><a href="#home">Services</a></li>
              <li><a href="#home">Blog</a></li>
              <li><a href="#home">Pages</a></li>
              <li><a href="#home">Contact</a></li>
            </ul>
          </div>
          <button className="bg-gradient-to-r from-[#55c48b] to-[#01849f] shadow-lg text-[#262626] h-[60px] p-6 m-6 rounded-full font-[Asap] text-center text-white font-asap font-bold ">Free consultation</button>

        </div>
        <div className="z-3 absolute left-20 bottom-10">
          <h1 className="font-asap text-[rgb(85,196,139)] text-[20px] tracking-[6px]  pb-5 font-medium">WE ARE EXPERT TEAM</h1>
          <p className="font-asap text-[rgb(12,12,12)] text-[45px] leading-[1.2] font-bold">We create products<br/> 
            that makes people's <span className="underline text-[rgb(4,134,158)]">lives</span><br/> easier & better.</p>
        </div>
    </div>
  );
}
