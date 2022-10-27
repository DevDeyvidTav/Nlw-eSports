

interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
}




export function GameBanner(props: GameBannerProps){
    return(
        <a href="" className='relative'>
        <img className="rounded-lg" src={props.bannerUrl} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 rounded-lg left-0'>
          <strong className='font-bold text-white block'>{props.title}</strong>
          <span className='text-zinc-300 text-sm block'>{props.adsCount} anuncio(s)</span>
        </div>
      </a>
    )

}