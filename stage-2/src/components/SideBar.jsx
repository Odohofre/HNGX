import React from 'react';
import movieboxLogo from '../assets/tv.png';
import SideNav from './SideNav';
import SideText from './SideText';
import logoutImage from '../assets/Logout.png';

export default function SideBar() {
  return (
    <aside className="hidden lg:flex w-60 flex-col border h-screen overflow-y-auto text-[#666] border-black/30 rounded-r-[45px] pt-10 pb-16">
      <div className="flex items-center space-x-6 px-5 mb-6">
        <a href="/">
          <img src={movieboxLogo} alt="movie box logo" />
        </a>

        <span className="text-2xl text-[#333] block leading-none font-bold">
          MovieBox
        </span>
      </div>
      <SideNav />
      <SideText />
      <a href="/" className="flex items-center px-[42px] font-poppins mt-6">
        <img src={logoutImage} alt="exit" />
        <span>Log out</span>
      </a>
    </aside>
  );
}
