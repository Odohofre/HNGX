import React from 'react';
import calender from '../assets/Calendar.png';
import home from '../assets/Home.png';
import projector from '../assets/Movie Projector.png';
import tv from '../assets/TV Show.png';

function NavItem({ title, image }) {
  return (
    <li className={`py-3.5 font-poppins font-semibold text-lg leading-normal ${title === 'Movies' ? 'bg-rose-200 text-rose-700 border-r-4 border-rose-700' : 'bg-none text-[rgb(102,102,102)]'}`}>
      <a href="/" className='flex items-center space-x-4 pl-7'>
        <img src={image} alt={title} />
        <span>{title}</span>
      </a>
    </li>
  );
}

export default function SideNav() {
  const links = [
    { title: 'Home', image: home },
    { title: 'Movies', image: projector },
    { title: 'TV Series', image: tv },
    { title: 'Upcoming', image: calender },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <NavItem key={link.title} title={link.title} image={link.image} />
        ))}
      </ul>
    </nav>
  );
}
