import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faWordpress, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Card from "./component/Card";


export default function Home() {
  return (
    <div className="static">
      <Image
        src="/slider-layer-1.webp"
        alt="Slider Layer 1"
        width={1370}
        height={900}
        className="w-[100%] h-auto absolute top-0 -right-80 z-1"
      />
      <div className="mx-30 mt-70 mb-100">
        <h1 className="font-asap text-[rgb(85,196,139)] text-[20px] tracking-[6px]  pb-5 font-medium">WE ARE EXPERT TEAM</h1>
        <p className="font-asap text-[rgb(12,12,12)] text-[45px] leading-[1.2] font-bold">We create products<br />
          that makes people's <span className="underline text-[rgb(4,134,158)]">lives</span><br /> easier & better.
        </p>
        <div className="flex flex-row gap-6 mt-10 items-center">
          <button className="bg-white shadow-lg shadow-xl/30 shadow-gray-700 text-[rgb(4,134,158)] rounded-full font-asap font-medium text-[18px] h-[60px] px-10">How it works?</button>
          <div><a className="text-gray-400 underline">Read the full story line</a></div>
        </div>
      </div>


      <div className="relative">
        {/* Services card Section */}
        <Card />
        <div className="w-full bg-[#01849F12] flex pt-40 px-20 gap-10 relative">
          <Image
            src="/images/woman-min.png"
            alt="Woman"
            width={570}
            height={950}
          />
          <div className="mt-40">
            <Image
              src="/images/group.png"
              alt="Quote"
              width={100}
              height={100}
              className="mb-6"
            />
            
            <h2 className="text-[rgb(4,134,158)] tracking-[6px] text-sm mb-5">ABOUT OUR COMPANY</h2>
            <h1 className="text-4xl font-extrabold mb-5 leading-15">We are team of expert people with creativity ideas</h1>
            <p className="text-gray-400 text-[20px] leading-[2] mb-10">
              As an example, let's take the content marketing process, It's a process you'll find in Marketing Departement out there.
            </p>
            <div className="grid grid-flow-col grid-rows-2  gap-5 mt-10">
              <div className="flex flex-row items-center group">
                <div className="bg-[rgb(85,196,139)] w-20 h-20 rounded-full justify-center items-center flex group-hover:scale-120 group-hover:transition-all duration-300 group-hover:bg-[rgb(4,134,158)]">
                  <FontAwesomeIcon icon={faPaintBrush} className="text-white text-[30px]" />
                </div>
                <div className="ml-2">
                  <h2 className="font-asap text-xl font-bold mb-4 tracking-wide group-hover:text-[rgb(4,134,158)]">Designing</h2>
                  <p className="font-asap text-xl text-gray-400">Expert in photosop</p>
                </div>
              </div>
              <div className="flex flex-row items-center group">
                <div className="bg-[rgb(85,196,139)] w-20 h-20 rounded-full justify-center items-center flex group-hover:scale-120 group-hover:transition-all duration-300 group-hover:bg-[rgb(4,134,158)]">
                  <FontAwesomeIcon icon={faCodepen} className="text-white text-[30px]" />
                </div>
                <div className="ml-2">
                  <h2 className="font-asap text-xl font-bold mb-4 tracking-wide group-hover:text-[rgb(4,134,158)]">Devolopment</h2>
                  <p className="font-asap text-xl text-gray-400">Any CMS you want</p>
                </div>
              </div>
              <div className="flex flex-row items-center group">
                <div className="bg-[rgb(85,196,139)] w-20 h-20 rounded-full justify-center items-center flex group-hover:scale-120 group-hover:transition-all duration-300 group-hover:bg-[rgb(4,134,158)]">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white text-[30px]" />
                </div>
                <div className="ml-2">
                  <h2 className="font-asap text-xl font-bold mb-4 tracking-wide group-hover:text-[rgb(4,134,158)]">Social Media</h2>
                  <p className="font-asap text-xl text-gray-400">Increase your likes</p>
                </div>
              </div>
              <div className="flex flex-row items-center group">
                <div className="bg-[rgb(85,196,139)] w-20 h-20 rounded-full justify-center items-center flex group-hover:scale-120 group-hover:transition-all duration-300 group-hover:bg-[rgb(4,134,158)]">
                  <FontAwesomeIcon icon={faWordpress} className="text-white text-[30px]" />
                </div>
                <div className="ml-2">
                  <h2 className="font-asap text-xl font-bold mb-4 tracking-wide group-hover:text-[rgb(4,134,158)]">WordPress</h2>
                  <p className="font-asap text-xl text-gray-400">Themes and plugins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
