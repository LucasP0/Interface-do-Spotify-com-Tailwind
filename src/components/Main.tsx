import Image from "next/image";
import { Home as  ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Layout, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
// imagens: goodafter
import theWekend from '../../public/img/img_goodAfter/the_weeknd.png';
import michall from '../../public/img/img_goodAfter/michall.jpg';
import dua_lipa from '../../public/img/img_goodAfter/dua_lipa.jpg';
import bruno from '../../public/img/img_goodAfter/bruno.jpg';
import eminem from '../../public/img/img_goodAfter/eminem.jpg';
import tylor from '../../public/img/img_goodAfter/tylor.jpg';

export const Main = () => {
  return (
    <main className=" pr-3 pl-3 pt-3">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div>
        {/* Good Afternoon */}
        <h1 className="font-semibold text-3xl mt-5 pb-4">Good Afternoon</h1>
        <div className="grid grid-cols-3 gap-4">
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={theWekend} width={80} height={80} alt="Album do the Wekend"/>
            <strong>StarBoy</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={michall} width={80} height={80} alt="Thriller"/>
            <strong>Thriller</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={dua_lipa} width={80} height={80} alt="The Moonlight"/>
            <strong>The Moonlight</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={bruno} width={80} height={80} alt="unorthodox jukebox"/>
            <strong>unorthodox jukebox</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={eminem} width={80} height={80} alt="Encore"/>
            <strong>Encore</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
          <a href="#" className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
            <Image src={tylor} width={80} height={80} alt="Reputation"/>
            <strong>Reputation</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
          </a>
        </div>

        {/* made for U */}
        <h2 className="font-semibold text-3xl mt-5 pb-4">Made for You </h2>
{/* AJUSTAR O GRID-COLS PARA NÃ FICAR BIZZARO */}
       <div className="grid grid-cols-8 gap-4">
        <a className="bg-white/5 p-2 mb-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src={theWekend} className="w-full" width={80} height={80} alt="Album do the Wekend"/>
        <strong className="font-semibold">Mixed 1</strong>
        <span className="text-xs text-zinc-400">Your weekly, mixtap of fresh music. Enjoy</span>
        </a>
       </div>
      </main>
  )
}