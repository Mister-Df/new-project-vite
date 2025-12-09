import { Link } from "react-router-dom"
import Pricebar from "./Pricebar"
import BurgerLogo from "../pageLogin/BurgerLogo"
import { PiHamburgerBold } from "react-icons/pi"
import MenuCommand from "./MenuCommand"

export default function MenuNavbar() {
    return (
        <div className="bg-body shadow-xl">
            <nav className="navbar navbar-expand-lg  bg-light">
                <div className="container-fluid shadow-sm ">
                    <Link to={'/navbar'} className="navbar-brand">
                        <div className=' flex justify-center'>
                            <p className=' m-0 flex text-xl text-amber-500 justify-center items-center'>CREZEE <span><PiHamburgerBold className='text-amber-500' /></span> BURGER</p>
                        </div>
                    </Link>

                    <div className="navbar-nav navbar-collaps" id="navbarText">
                        <ul className=" flex justify-center gap-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        {/* <span className="navbar-text">
                            Navbar text with an inline element
                        </span> */}
                    </div>
                </div>
            </nav>
            <div className="flex absolute">
                <Pricebar />
                <MenuCommand />
            </div>
        </div>
    )
}
