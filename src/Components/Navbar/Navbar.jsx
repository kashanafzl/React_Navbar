import React , {useState} from 'react'
import './Navbar.css'

import { Icon } from '@iconify/react';

export default function Navbar() {

  const [sidebar , setSidebar] = useState(false)


  const clickthemenubarbtn = () => {
    setSidebar(!sidebar)
  }

  return (
    <div>


      <div className="maindivofnavbar">

        <div>
           <h2>Restaurants </h2>
        </div>

        <div>
   
          <ul className={sidebar ? 'newflex' : 'uflex'} >
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>

            
        
          
          </ul>
          <div onClick={clickthemenubarbtn} className='menubaricon'>
          <span><Icon icon="material-symbols:menu" /></span>
          </div>


        </div>


        </div>


    </div>
  )
}
