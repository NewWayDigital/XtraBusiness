import Image from "next/image";
export default function Card() {
    return (
        <div className="flex mt-40 gap-5 mx-20 mb-20 absolute -top-100 z-9">
            <div className="shadow-lg rounded-xl p-5 text-white bg-gradient-to-t from-[rgb(4,134,158)] to-[rgb(85,196,139)] flex flex-col justify-center">
                <h2 className="font-asap text-sm tracking-[8px] ml-5 mb-10">OUR SERVICES</h2>
                <p className="font-asap text-[30px] font-bold ml-5">We will help your Business Growing</p>
            </div>
            <div className="shadow-xl rounded-xl p-5 pl-10 pb-10 flex flex-col justify-center bg-white hover:shadow-[rgb(4,134,158)] hover:shadow-lg/20 hover:-translate-y-4 hover:transition-all duration-600 group hover:border-[rgb(4,134,158)] hover:border-1">
                <Image src="/images/smartphone.png" alt="like" width={100} height={100} className="my-5 group-hover:rotate-y-360 group-hover:transiton-all duration-300" />
                <h2 className="font-asap text-xl font-bold p-5 pl-0 group-hover:text-[#55C48B]">Social Marketing</h2>
                <p className="font-asap text-[16px] text-gray-400 pr-10 leading-[2]">Social marketing is an approach used to develop activities aimed.</p>
            </div>
            <div className="shadow-xl rounded-xl p-5 pl-10 pb-10 flex flex-col justify-center bg-white hover:shadow-[rgb(4,134,158)] hover:shadow-lg/20 hover:-translate-y-4 hover:transition-all duration-600 group hover:border-[rgb(4,134,158)] hover:border-1">
                <Image src="/images/user.png" alt="smartphone" width={100} height={100} className="my-5 group-hover:rotate-y-360 group-hover:transiton-all duration-300" />
                <h2 className="font-asap text-xl font-bold p-5 pl-0 group-hover:text-[#55C48B]">Business Ideas</h2>
                <p className="font-asap text-[16px] text-gray-400 pr-15 leading-[2]">Based on client needs, we will provide some good business solutions.</p>
            </div>
            <div className="shadow-xl rounded-xl p-5 pl-10 pb-10 flex flex-col justify-center bg-white hover:shadow-[rgb(4,134,158)] hover:shadow-lg/20 hover:-translate-y-4 hover:transition-all duration-600 group hover:border-[rgb(4,134,158)] hover:border-1">
                <Image src="/images/like.png" alt="user" width={100} height={100} className="my-5 group-hover:rotate-y-360 group-hover:transiton-all duration-300" />
                <h2 className="font-asap text-xl font-bold p-5 pl-0 group-hover:text-[#55C48B]">Development</h2>
                <p className="font-asap text-[16px] text-gray-400 leading-[2]">Creating Your Own Website was Never That Easy. come and Check it out!</p>
            </div>
        </div>
    )
}