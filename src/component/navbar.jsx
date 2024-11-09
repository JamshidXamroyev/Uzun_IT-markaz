import { useState } from 'react'
import {navbarLinks, logo} from '../util/constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [active, setActive] = useState('home')

  window.addEventListener('scroll', (e) => {
    window.scrollY >= 70 ? setShadow(true) : setShadow(false)
  })

  const toggleHandler = () => setToggle(prev => !prev)

  const activeHandler = (e, id) => {
    e.preventDefault()
    setActive(id)
  }

  return (
    <div className={`flex justify-between items-center px-10 pl:pr-20 py-0 m-0 fixed w-full z-50 bg-black ${shadow ? 'my__shadow' : ''}`}>
      <div className='flex justify-center items-center xx:w-1/3 pl:w-1/5'>
        <img src={logo} alt="logo" className="w-40 p-1 m-2 cursor-pointer select-none"/>
      </div>
      <div>
        <ul className={`pl:flex hidden justify-center items-center gap-5`}>
                {navbarLinks.map((item, ind) => (
                    <li key={ind} onClick={(e) => activeHandler(e, item.id)} className={`font-bodyFont font-bold text-1/3xl hover:text-blue-500 transition-all duration-300 ${active === item.id ? 'text-blue-500' : "text-white"}`}>
                        <a href={item.id}>{item.title}</a>
                    </li>
                ))}
        </ul>
        <div className='pl:hidden flex object-contain' onClick={toggleHandler}>
          {toggle ? <i className="fa-solid fa-xmark z-20 text-white text-2xl"></i> :<i className="fa-solid fa-bars text-white text-2xl"></i>}
          <div className={`${!toggle ? 'hidden' : 'flex'} py-4 bg-black-slider absolute left-[-2vw] right-0 w-[100vw] sidebar z-10`}>
          <ul className={`flex justify-center flex-1 items-center gap-5 flex-col`}>
                {navbarLinks.map((item, ind) => (
                    <li key={ind} onClick={(e) => activeHandler(e, item.id)} className={`font-bodyFont font-bold text-1/3xl hover:text-blue-500 transition-all duration-500 ${active === item.id ? 'text-blue-500' : "text-white"}`}>
                        <a href={item.id}>{item.title}</a>
                    </li>
                ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar