import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
     <nav>
        <div className='logo'>
            <img className='logoi' src='data:image/png;base64,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' alt="logo"/> 

        </div>
        <ul>
            <li href="#">Menu </li>
            <li href="#">Location </li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>


        <button>Login</button>
     </nav>
    </div>
  )
}

export default Navbar
