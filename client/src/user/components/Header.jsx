import headerLogo from '../../assets/Windsor-Logo-Gold.svg';

export default function Header() {
  return (
    <header className='bg-header-red fixed inline-block w-full z-10'>
      <a className="header-logo inline-block w-24 h-24" href='/'>
        <img className="w-full h-full ml-2.5 mr-2.5 mb-2.5 " src={headerLogo} alt="Windsor Logo" />
      </a>

      <nav className='items absolute inline right-0 bottom-0 mb-8 mr-8'>
        <Item name='Accommodation'/>
        <Item name='Meeting & Items'/>
        <Item name='Explore'/>
        <Item name='Book now!'/>
      </nav>
    </header>
  )
}

function Item({ name, url }) {
  return (
    <>
      <a href={url} className='italic text-xl text-white mx-5 duration-300 hover:text-primary-gold cursor-pointer'>
        {name}
      </a>
    </>
  )
}