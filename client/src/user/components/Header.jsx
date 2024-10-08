import { useEffect } from 'react';
import $ from 'jquery';

import appLogo from '../../assets/images/Windsor-Logo-Gold.svg';
import headerItems from '../../assets/json/headerItems.json';

export default function Header() {
  // Transition color of header when scrolling
  const listenScrollEvent = () => {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $(".header").addClass("bg-primary-red");
        $(".header").addClass("shadow-lg");
        $(".header").removeClass("bg-transparent");
      } else {
        $(".header").addClass("bg-transparent"); 
        $(".header").removeClass("bg-primary-red"); 
        $(".header").removeClass("shadow-lg"); 
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className="header bg-transparent fixed inline-block w-full z-20 transition-colors duration-500">
      <a className="header-logo inline-block w-24 h-24" href="/">
        <img
          className="w-full h-full ml-2.5 mr-2.5 mb-2.5 "
          src={appLogo}
          alt="Windsor Logo"
        />
      </a>

      <nav className="sub-menu absolute inline right-0 bottom-0 mb-8 mr-8">
        {headerItems.map((item) => (
          <SubMenu key={item.name} name={item.name} path={item.path}>
            {item.subitem && (
              <ul className="group absolute list-none hidden group-hover:block ml-16 bg-white z-100 right-1 shadow-md">
                {item.subitem.map((sub_item) => (
                  <li key={sub_item.name} className="relative px-4 py-2">
                    <a
                      href={sub_item.path}
                      className="text-lg decoration-1 hover:text-primary-red duration-100 drop-shadow-md"
                    >
                      {sub_item.name.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </SubMenu>
        ))}
      </nav>
    </header>
  );
}

function SubMenu({ name, path, children }) {
  return (
    <div className="sub-menu relative inline group">
      <a
        href={path}
        className="transition italic text-xl text-white mx-5 duration-300 hover:text-primary-gold cursor-pointer"
      >
        {name}
        {children}
      </a>
    </div>
  );
}
