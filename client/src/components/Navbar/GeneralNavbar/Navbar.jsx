import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./GeneralNav.css"
import ProfileIcon from '../../../assets/Profile-Icon.png'
import DarkThemeToggle from './ThemeButton'
import useLogout from '../../../hooks/useLogout'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';


const Navbar = () => {
    const [removeMenu, setShowMenu] = useState('remove-menu')
    const [isScrollHeader, setIsScrollHeader] = useState(false);
    const {user} = useUsersContext();

    // logout context
    const {logout} = useLogout()

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


    const toggleRemoveMenu = () => {
        setShowMenu((curr) => (curr === "nav__menu" && "remove-menu"))
    }
    const toggleShowMenu = () => {
        setShowMenu((curr) => (curr === "remove-menu" && "nav__menu"))
    }

    // log user out
    const handleSubmit = () =>{
        logout()
    }

    const { cart } = useShoppingCart();

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
                    <Link to='/artists'><li>Artist</li></Link>
                    <Link to='/gallery'><li>Gallery</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                </ul>

                <div className="narve_right">
                    <Link to='/cart'>
                        <i className="uil uil-shopping-cart first"></i>
                        {cart.length > 0 && (
                            <span className="cart-item-count">{cart.length}</span>
                        )}
                    </Link>
                    <DarkThemeToggle />
                    {user ? (
                        <>
                            <Link to='/dashboard/:userId'>
                                <div className="select">
                                    <img
                                        src={ProfileIcon}
                                        alt=""
                                        style={{width:"50px"}}
                                        className="image"
                                    />
                                    {user.userEmail}
                                </div>
                            </Link>
                            <button onClick={handleSubmit}>
                                LogOut
                            </button>   
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