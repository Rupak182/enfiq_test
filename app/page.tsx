import Image from "next/image";
import { ClashDisplay, ClashGrotesk, pavelt } from "./layout";
export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen p-2">
     <div className="header p-4 px-20  text-white bg-[url('https://framerusercontent.com/images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg')] bg-cover bg-center rounded-md">
     <nav className="text-lg">
        <div className="container mx-auto flex items-center justify-between">
          
          <div className={`text-2xl font- ${pavelt.className} flex items-center gap-2 `}>
            <Image src="/pattern.svg" alt="" width={20} height={20} />ENFIQ
            
            </div>
          <div className="space-x-7 ">
            <a href="#" className="hover:text-[#d41717]">
              Services
            </a>
            <a href="#" className="hover:text-[#d41717]">
              Portfolio
            </a>
            <a href="#" className="hover:text-[#d41717]">
              Testimonials
            </a>
          </div>
          <div>
            <button className="bg-[#d41717] flex items-center justify-center gap-3 font-medium hover:bg-red-700 text-white  py-2 px-4 rounded-3xl">
              <span>Get Started</span> <span className="text-red-400">|</span><Image src="/file.svg" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        </nav>


      <header className="container mx-auto py-20 ">
        <p className={`text-[#d41717] text-lg font-bold uppercase mb-4 w-fit p-4 py-2 rounded-2xl  bg-[#ffc9c9] ${ClashDisplay.className}`}>
          For Ambitious Startups & Businesses
        </p>
        <h1 className={`text-7xl font-bold mb-6 ${ClashGrotesk.className}`}>
          BRING THE REVENUE TO HOME
          <br />
          WITH OUR GROWTH SOLUTIONS
        </h1>
        <p className="text-3xl mb-12 font-medium">
          Your Revenue, Elevated.
          <br />
          Let's Build a Path to Success Together!
        </p>
        <button className="bg-[#d41717] rounded-3xl hover:bg-red-700 text-white font-medium py-3 px-8 text-xl mr-4">
          Get Started &rarr;
        </button>
        <button className="bg-transparent border rounded-3xl text-lg border-white/20 hover:border-white text-white font-bold py-3 px-8 ">
          View Our Work
        </button>
      </header>
     </div>
    </div>
  );
}
