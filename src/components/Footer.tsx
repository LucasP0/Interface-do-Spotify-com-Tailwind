import michall from '../../public/img/img_goodAfter/michall.jpg';
import Image from "next/image";
import { Home as  ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Layout, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700  p-4 flex  items-center justify-between">
    <div className="flex items-center gap-3">
    <Image src={michall} width={46} height={46} alt="Thriller"/>
    <div className="flex flex-col">
     <strong className="font-normal">Thriller</strong>
     <span className="text-tx text-zinc-400">Michael  Jackson</span>
    </div>
    </div>
    <div className="flex flex-col items-center">
     <section className="flex items-center gap-3">
       <Shuffle className="text-zinc-200" />
       <SkipBack className="text-zinc-200" />
       <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
         <Play />
       </button>
       <SkipForward className="text-zinc-200"  />
       <Repeat className="text-zinc-200"  />
     </section>
     <section className="flex items-center gap-2">
       <span className="text-xs text-zinc-500">0:31</span>
       <div className="h-1 rounded-full w-96 bg-zinc-700 ">
         <div className="bg-zinc-200 w-40 h-1 rounded-1"></div>
       </div>
       <span className="text-xs text-zinc-500">2:31</span>
     </section>
    </div>
    <div className="flex items-center gap-4">
     <Mic2 size={20} />
     <Layout />
     <Laptop2 size={20} />
     <div className="flex items-center gap-2">
       <Volume size={20} />
       <div className="h-1 rounded-full w-24 bg-zinc-700">
         <div className="bg-zinc-200 w-10 h-1 rounded-1"></div>
       </div>
     </div>
     <Maximize2 size={20} />
    </div>
   </footer>
  )

}