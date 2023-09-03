import { Link } from "react-router-dom"

const Navbar = () =>{

    return (
        <nav id="narve-bar">
            <div className="logo">
                <h2>SHOWOFF</h2>
                <ul className="narv-ul">
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={"/about"}><li>About</li></Link>
                    <Link to={"#"}><li>Artist</li></Link>
                    <Link to={"/gallery"}><li>Gallery</li></Link>
                    <Link to={"/shop"}><li>Shop</li></Link>
                </ul>
            </div>

            <div className="narve-right">
                <i className="uil uil-search"></i>
                <input type="text" placeholder="search. . ." />
                <Link to="/cart.html"><i className="uil uil-shopping-cart first"></i></Link>
                <i className="uil uil-moon" id="light"></i>
                <div className="dropdown">
                    <Link to="./dashboard/dashboard.html">
                        <div className="select">
                            <img src="./images/Profile-Icon.png" alt="" width="50" className="image"/>
                        </div>
                    </Link>
                </div>
                <Link to="./dashboard/upload.html"><button>Upload</button></Link>
            </div>
        </nav>
    )

}

export default Navbar