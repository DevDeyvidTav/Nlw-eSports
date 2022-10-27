import logo from './assets/logo.svg'

import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'

import { CreateAdBanner } from './components/CreateAdBanner'
import { ChakraProvider } from '@chakra-ui/react'

interface Games {
  id: string,
  titles: string,
  bannerUrl: string,
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Games[]>()

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data[0]))

  }
    , [])




  return (
    <ChakraProvider>
      <div className="max-x-[1354px] mx-auto flex items-center my-20 flex-col">
        <img src={logo} alt="" />
        <h1 className='text-6xl font-black mt-20 text-white'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui</h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
          {games ? games.map(game => {
            return (
              <GameBanner
                key={game.id}
                title={game.titles}
                bannerUrl={game.bannerUrl}
                adsCount={game._count.ads} />
            )
          }) : null}
        </div>
        <CreateAdBanner />
      </div>
    </ChakraProvider>
  )
}

export default App
