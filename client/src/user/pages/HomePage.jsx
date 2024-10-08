import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

// Images
import MainLobby from '../../assets/images/homepage/MainLobby.webp';
import MainEntrance from '../../assets/images/homepage/MainEntrance.webp';
import Banner from '../../assets/images/homepage/Banner.webp';
import DeluxeTwin from '../../assets/images/accommodation/Deluxe-Twin.webp';
import JuniorSuite from '../../assets/images/accommodation/Junior-Suite.webp';
import PlazaKing from '../../assets/images/accommodation/Plaza-King.webp';

// Global variables
const videoUrl = 'https://windsorplazahotel.com/wp-content/uploads/2024/03/Hero2.mp4';

export default function HomePage() { 
  return (
    <div className="home-page h-full">
      <VideoContainer />
      <Introduction />
      <Accommodation />

      <div className="home-page-banner relative text-center mb-9">
        <img src={Banner} alt="Banner" />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl text-white italic">
          Old World Charm in Saigon
        </div>
      </div>
    </div>
  )
}

function VideoContainer() {

  return (
    <div className="video-container relative z-0">
      <video src={videoUrl} autoPlay={true} loop={true} muted className="w-full relative"></video>

      <div className="text-container absolute top-1/4 left-20 z-1 text-white">
        <p className='text-8xl mb-7 bold'>Old World Charm <br/> in Saigon</p>
        <p className='text-3xl italic uppercase'>Windsor Plaza Hotel</p>
      </div>
    </div>
  )
}

function Introduction() {
  return (
    <div className="introduction-container relative mt-16 mb-12">
      <div className='text-primary-red text-5xl ml-12'>Windsor Plaza Hotel</div>

      <div className="content relative px-12 py-5">
        <img className='w-fit h-180 object-contain' src={MainLobby} alt="Windsor Main Lobby" />

        <div className='absolute right-0 top-0 max-w-2xl mr-10 py-5'>
          <p className='text-gray-600 text-lg'>
            Located in the heritage quarter of old Saigon, Windsor Plaza Hotel offers authentic Vietnamese hospitality with a mix of commercial, retail, entertainment, and cultural experiences.
            <br/>
            <br/>
            Impeccable facilities and friendly service to make your stay, be it for business or leisure, convenient and comfortable.
            <br/>
            <br/>
            The hotel also offers shuttle bus to major city landmarks, entertainment and dining precincts.
            <br/>
            <br/>
            Time Zone : GMT + 7 <br/>
            Country Dialing Code : 84 <br/>
            City Dialing Code : 28 <br/>
          </p>
          
          <img className='mt-5' src={MainEntrance} alt="Windsor Main Entrance" />
        </div>

      </div>
    </div>
  )
}

function Accommodation() {
  return (
    <div className="accommodation-container flex flex-col items-center justify-center bg-[#f6f4f2] pt-20 pb-10">
      <div className='text-5xl text-primary-red'>Accommodation</div>
      <p className='text-center mt-10 text-xl text-gray-600'>
        Our extensive range of accommodations ensures <br/> there is something to suit every traveller  
      </p>

      {/* Room slider */}
      <div className="slider w-[65%] my-10">
        <Slide>
          <div
            style={{
              backgroundImage: `url(${DeluxeTwin})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '60vh',
            }}
          >
          </div>
          <div
            style={{
              backgroundImage: `url('${JuniorSuite}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '60vh',
            }}
          >
          </div>
          <div
            style={{
              backgroundImage: `url('${PlazaKing}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '60vh',
            }}
          >
          </div>
        </Slide>
      </div>

      <button 
        className='uppercase text-lg font-medium text-primary-red border border-primary-red px-6 py-2 hover:bg-primary-red hover:text-white transition duration-200'>
          Explore now
          </button>
    </div>
  )
}