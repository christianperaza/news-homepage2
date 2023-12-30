import { useState } from "react"

import burgerMenu from "../assets/images/icon-menu.svg"
import iconMenuClose from "../assets/images/icon-menu-close.svg"

export const NavBar = () => {
    const [showMenu, noShowMenu] = useState(false)

    const handleClick = () => {
        noShowMenu(!showMenu)
    }

    const buttonClassName = showMenu ? "navMobile show" : "navMobile"

    return (
        <>
            <nav className={buttonClassName}>
                <button className="navMobile-menuClose-button" onClick={handleClick}>
                    <img className="navMobile-menuClose-icon" src={iconMenuClose} alt="Icon Menu Close" />
                </button>

                <ul className="navMobile-navList">
                    <li className="navMobile-navItem">
                        <a className="navMobile-navLink" href="#">Home</a>
                    </li>
                    <li className="navMobile-navItem">
                        <a className="navMobile-navLink" href="#">New</a>
                    </li>
                    <li className="navMobile-navItem">
                        <a className="navMobile-navLink" href="#">Popular</a>
                    </li>
                    <li className="navMobile-navItem">
                        <a className="navMobile-navLink" href="#">Trending</a>
                    </li>
                    <li className="navMobile-navItem">
                        <a className="navMobile-navLink" href="#">Categories</a>
                    </li>
                </ul>
            </nav>   

            <ul className="header-navList">
                <li className="header-navItem">
                    <a className="header-navLink" href="#">Home</a>
                </li>
                <li className="header-navItem">
                    <a className="header-navLink" href="#">New</a>
                </li>
                <li className="header-navItem">
                    <a className="header-navLink" href="#">Popular</a>
                </li>
                <li className="header-navItem">
                    <a className="header-navLink" href="#">Trending</a>
                </li>
                <li className="header-navItem">
                    <a className="header-navLink" href="#">Categories</a>
                </li>
            </ul>

            <button className="header-burgerMenu-button" onClick={handleClick}>
                <img className="header-burgerMenu-img"  src={burgerMenu} alt="Burger Menu" />
            </button>
        </>   
    )
} 
