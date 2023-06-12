import { Home as  HomeIcon, Search, Library   } from 'lucide-react';

export const Sidebar = () => {
  return (
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
  )
}