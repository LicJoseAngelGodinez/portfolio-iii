import { useState } from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";

const Navbar = () => {

    const [buger_class,setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class,setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if ( !isMenuClicked ) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
    <>
        <nav>
            <div className='brand'>AG</div>
            <div className='nav-menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={buger_class}></div>
                <div className={buger_class}></div>
                <div className={buger_class}></div>
            </div>
        </nav>

        <div className={menu_class}>

            <Link onClick={updateMenu} to="/">Home</Link>
            <Link onClick={updateMenu} to="/about">About</Link>

        </div>

    </>
    )
}

export default Navbar;
