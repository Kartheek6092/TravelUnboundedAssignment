import { Link } from "react-router-dom/cjs/react-router-dom.min"

import './index.css'

const Header = () =>(
    <nav className='header-container'>
        <Link to='/' className="link-el">
            <img className="logo" 
            src='https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690987751/Transparent_-_Travel_Unbounded-06_utntbp.png' 
            alt='website logo' />
        </Link>
        <ul className='nav-items'>
            <li className='nav-item'><Link className='link-el' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='link-el' to='/plan'>Tour Plan</Link></li>
            <li className='nav-item'><Link className='link-el' to='/book'>Book Now</Link></li>
            <li className='nav-item'><Link className='link-el' to='/payment'>Payment</Link></li>
        </ul>
    </nav>
)

export default Header