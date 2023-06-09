import React from "react"
import { Home as HomeIcon, Search, Library  } from 'lucide-react'

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
        <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-1">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">PlayList 1</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        main
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
   </div>
  )
}
