import { Link } from "react-router-dom"
import Pricebar from "./Pricebar"
import BurgerLogo from "../pageLogin/BurgerLogo"
import { PiHamburgerBold } from "react-icons/pi"
import MenuCommand from "./MenuCommand"
import { CgProfile } from "react-icons/cg";
import ModalPrice from "./ModalPrice"
import ModalContent from "./ModalContent"
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useContext, useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { TeamContext } from "../../ThemProvider"



export default function MenuNavbar() {

    // const [darkMode, setDarightMode] = useState(false)
    const {darKFunct, darkMode} = useContext(TeamContext)
    console.log(darkMode);
    

    return (
        <div className="bg-body">
            <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-light' : 'bg-dark '} `}>
                <div className="container-fluid p-2 shadow shadow-sm">
                    <Link to={'/'} className="navbar-brand">
                        <div className=' flex justify-center'>
                            <p className=' m-0 flex text-xl text-amber-500 justify-center famili display-6 font-black -tracking-[.100%] items-center'>CREZEE <span><PiHamburgerBold className='text-amber-500' /></span> BURGER</p>
                        </div>
                    </Link>

                    <div className="navbar-nav navbar-collaps" id="navbarText">
                        <ul className=" flex justify-center items-center  mb-2 mb-lg-0">
                            <div className="flex gap-2 items-center justify-center">
                                <button 
                                onClick={darKFunct}
                                className="w-11 rounded bg-black border">
                                   {!darkMode ? <BsFillMoonStarsFill className="text-x text-amber-600" /> : <MdLightMode className="text-x transition-all duration-75 ms-4" />} 
                                    {/* <MdLightMode className="text-xl " /> */}
                                </button>
                                <li className="  ">
                                    <ModalPrice />
                                </li>
                                <li className="nav-item text-right text-sm leading-none flex flex-col justify-center ">
                                    <a className="nav-link display-3 py-1 m-0" href="#">Hell,<span className="text-amber-500 font-semibold">Bob</span> </a>
                                    <Link><button className=" h-[10px]">Se déconnecter</button></Link>
                                </li>
                                <CgProfile className="mt-2 cursor-pointer hover:text-amber-500  sm:text-3xl text-secondary" />
                            </div>
                        </ul>
                        {/* <span className="navbar-text">
                            Navbar text with an inline element
                        </span> */}
                    </div>
                </div>
            </nav>
            <div className="flex ">
                {/* <Pricebar /> */}
                {/* <ModalContent /> */}

                <MenuCommand />
            </div>
        </div>
    )
}
