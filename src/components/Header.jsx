import logo from "../assets/images/logo.svg" // logo
import { NavBar } from "./NavBar.jsx" // nav

export const Header = () => {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="Logo" />

            <NavBar />
        </header>
    )
}