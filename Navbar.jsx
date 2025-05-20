import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Accueil</Link>
        </li>
        <li>
            <Link to="/About">A propos</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
         
      </ul>
    </div>
  )
}
export default Navbar