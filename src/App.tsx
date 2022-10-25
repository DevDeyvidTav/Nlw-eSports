import logo from './assets/logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-x-[1354px] mx-auto flex items-center my-20 flex-col">
      <img src={logo} alt="" />
      <h1 className='text-6xl font-black mt-20 text-white'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui</h1>
    
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative'>
          <img src="/image1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative '>
          <img src="/image2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/image3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>Counter Strike Global Offensive</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/image4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/image5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/image6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
            <strong className='font-bold text-white block'>World WarCraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncios</span>
          </div>
        </a>
      </div>
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 block'>Publique um novo anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 flex gap-3 text-white rounded items-center hover:bg-violet-600 hover:duration-300'><MagnifyingGlassPlus /> Publicar anúncio!</button>
      </div>
      
    </div>
    
    </div>
  )
}

export default App
