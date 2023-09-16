import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import movieboxLogo from '../assets/tv.png';
import menu from '../assets/Menu.png';

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <nav className={`fixed top-0 left-0 h-20 z-30 bg-none flex w-full py-4 mb-5 px-4 lg:px-24 justify-between items-center ${scrolling ? 'bg-slate-800/40': 'bg-none'}`}>
      <div className="flex items-center space-x-6">
        <a href="/"><img src={movieboxLogo} alt="movie box logo" /></a>
       
        <span className="text-2xl hidden lg:block leading-none font-bold">Movie Box</span>
      </div>
      <SearchBar />
      <div className='flex items-center space-x-3 lg:space-x-[27px]'>
        <p className="font-bold leading-normal">Sign In</p>
        <img src={menu} alt="Menu icon" />
      </div>
    </nav>
  );
}
