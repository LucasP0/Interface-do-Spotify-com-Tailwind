import React from "react"
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play  } from 'lucide-react'
import theWekend from '../../public/the_weeknd.png';
import Image from "next/image";


export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"/>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
          <div className="w-3 h-3 bg-green-500 rounded-full"/>
        </div>
        <nav className="space-y-5 mt-10">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc- ">
          <HomeIcon/>
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc- ">
          <Search />
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc- ">
            <Library />
            Your Library
          </a>
        </nav>

        <nav className="mt-6 pt-10 border-t border-zinc-1040 flex flex-col gap-1">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Ouvir no Trampo</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Para relaxar</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Só musica de filme</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist de seriados</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pra ouvir na hora da diversão</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Ouvir no almoço de familia</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">OUVIR NO ALMOÇO DE FAMILIA HAHA</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Ouvir com os amigos</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aleatórias</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div>
        <h1 className="font-semibold text-3xl mt-10 pb-4">Good Afternoon</h1>
        <div className="grid grid-cols-3 gap-4">
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
          <a href="#">
            <div className="bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors ">
            <Image src={theWekend} width={104} height={104} alt="Album do the Wekend"/>
            <strong>Album do The Weknd</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play />
            </button>
            </div>
          </a>
        </div>

      </main>
    </div>
    <footer className="bg-zinc-1040 border-t border-zinc-700 p-6">
      footer
    </footer>
   </div>
  )
}
