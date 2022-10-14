/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    const [hoverDesktop, setHoverDesktop] = useState(false);
    const [hoverMobile, setHoverMobile] = useState(false);

    const onMouseEnter = () => {
        setHoverDesktop(true);
        setHoverMobile(true);
    }

    const onMouseLeave = () => {
        setHoverDesktop(false);
        setHoverMobile(false);
    }

    const className = {
        navContainer: `inset-x-0 fixed top-0 py-5 transform duration-200 z-50 ${hoverDesktop || hoverMobile ? "bg-white h-auto" : "bg-white/50 h-20"}`,
        desktopDisplay: "w-full h-fit hidden lg:flex justify-around",
        mobileDisplay: "w-full h-fit grid place-items-center lg:hidden transform duration-200",
        collapsibleMenu: `${hoverMobile ? "visible bg-white" : "invisible bg-transparent"} py-5 w-full h-fit text-center -z-10 transform duration-200`,
        ul1: "list-none space-x-6 inline-flex font-hindVadodara",
        ul1Mob: `list-none space-y-2 font-hindVadodara ${hoverMobile ? "visible" : "invisible"}`,
        titleContainer: "w-fit",
        underline: `w-5 h-0.5 absolute inset-x-0 top-5 bg-yellow-400 -z-[1] transform duration-200`,
        underlineMob: `${hoverMobile ? "w-5 visible" : "w-0 invisible"} h-1 absolute inset-x-0 top-4 bg-yellow-400 -z-[1] transform duration-200`,
        navTitle: "font-Playfair font-bold text-xl",
        ul2: "list-none space-x-3 inline-flex w-fit",
        ul2Mob: `list-none space-x-3 inline-flex w-fit ${hoverMobile ? "visible" : "invisible"}`,
        navButtons: "w-10 h-10 rounded-tl-3xl rounded-br-3xl rounded-tr-2xl rounded-bl-2xl border border-gray-500/30 p-3",
        dummyStabilizer: "w-24",
    }

    return <div className={className.navContainer}>
        <div className={className.desktopDisplay}>
            <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className.ul1}>
                <li>
                    <a className="font-bold relative z-20" href="#">
                        Home
                        <div className={className.underline} />
                    </a>
                </li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
            <div className={className.titleContainer}>
                <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className.navTitle}>
                    Toms Agency
                </h1>
            </div>
            <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className.ul2}>
                <li>
                    <button href="#" className={className.navButtons}>
                        <FaFacebookF />
                    </button>
                </li>
                <li>
                    <button href="#" className={className.navButtons}>
                        <FaLinkedinIn />
                    </button>
                </li>
                <li>
                    <button href="#" className={className.navButtons}>
                        <FaInstagram />
                    </button>
                </li>
                <li className={className.dummyStabilizer} />
            </ul>
        </div>
        <div className={className.mobileDisplay}>
            <div className={className.titleContainer}>
                <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className.navTitle}>
                    Toms Agency
                </h1>
            </div>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className.collapsibleMenu}>
                <ul className={className.ul1Mob}>
                    <li>
                        <a href="#" className="font-bold relative z-20">
                            Home
                            <div className={className.underlineMob} />
                        </a>
                    </li>
                    <li>
                        <a href="#AboutUs">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#Services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#ContactUs">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <br />
                <ul className={className.ul2Mob}>
                    <li>
                        <button href="#" className={className.navButtons}>
                            <FaFacebookF />
                        </button>
                    </li>
                    <li>
                        <button href="#" className={className.navButtons}>
                            <FaLinkedinIn />
                        </button>
                    </li>
                    <li>
                        <button href="#" className={className.navButtons}>
                            <FaInstagram />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Navbar;