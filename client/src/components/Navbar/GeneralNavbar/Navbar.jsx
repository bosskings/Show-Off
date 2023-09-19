import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./GeneralNav.css"
import ProfileIcon from '../../../assets/Profile-Icon.png'
import DarkThemeToggle from './ThemeButton'

const Navbar = () => {
    const [removeMenu, setShowMenu] = useState('remove-menu')
    const [isScrollHeader, setIsScrollHeader] = useState(false);

    const handleScrollHeader = () => {
        if (window.scrollY >= 80) {
            setIsScrollHeader(true);
        } else {
            setIsScrollHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        return () => {
            window.removeEventListener('scroll', handleScrollHeader);
        };
    }, []);

    const user = false

    const toggleRemoveMenu = () => {
        setShowMenu((curr) => (curr === "nav__menu" && "remove-menu"))
    }
    const toggleShowMenu = () => {
        setShowMenu((curr) => (curr === "remove-menu" && "nav__menu"))
    }

    return (
        <nav className={`narve-bar ${isScrollHeader ? 'scroll-header' : ''}`}>
            <div className='nav__toggle' onClick={toggleShowMenu}>
                <i className="uil uil-apps"></i>
            </div>
            <div className="logo">
                <Link to="/">
                    <h2>SHOWOFF</h2>
                </Link>
            </div>
            <div className={`nav__menu ${removeMenu}`}>
                <i className="uil uil-times nav__close" onClick={toggleRemoveMenu}></i>
                <ul className="narv_ul">
                    <Link to='/about'><li>About</li></Link>
                    <Link to='artists'><li>Artist</li></Link>
                    <Link to='/gallery'><li>Gallery</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                </ul>

                <div className="narve_right">
                    <Link to='/cart'><i className="uil uil-shopping-cart first"></i></Link>
                    <DarkThemeToggle />
                    {user ? (
                        <>
                            <Link to='/dashboard/:userId'>
                                <div className="select">
                                    <img
                                        src={ProfileIcon}
                                        alt=""
                                        width="50"
                                        className="image"
                                    />
                                </div>
                            </Link>
                            <Link to='/'>Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>
                                <button>
                                    SignUp
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar