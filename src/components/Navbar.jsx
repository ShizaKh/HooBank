import { useState }from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

// Code Explanation:
/* manually updating states isn't a good choice...that'swhy prev is used which means the previous state 
2 menus are made for desktop & mobile devices
the 1st ul will be hidden in sm & visible in desktop
the 2nd ul will be visible in sm devices &*/


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} className='w-[124px] h-[32px]' />

                                            {/* for desktop devices */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

                                                {/* for mobile devices */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>

        {/* if toggle is on,it's a flex box.If it's not on, it will be hidden */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 r-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' } text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar