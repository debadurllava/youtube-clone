import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications, MdApps} from 'react-icons/md'
import './_header.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Header = ({handleToggleSidebar}) => {

   const [input, setInput] = useState('');
   const history = useHistory();
   const handleSubmit = (e) =>{
      e.preventDefault();
      history.push(`search/${input}`)
   }
  return (
    <div className='border border-dark header'>
     <AiOutlineMenu 
     className="header__menu" 
     size={26}
      onClick={() => handleToggleSidebar()}
     />

     <img
        src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
        alt='youtube logo'
        className='header__logo'
     />
     <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search' value={input} onChange={e => setInput(e.target.value)}/>
        <button type='submit'>
            <AiOutlineSearch size={22}/>
        </button>
     </form>
     <div className='header__icons'>
     <MdNotifications size={28} />
     <MdApps size={28} />
     <img
        src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
        alt='avater'
     />

     </div>
    </div>
  )
}

export default Header
