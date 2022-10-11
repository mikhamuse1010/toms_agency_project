/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    const className = {
        navContainer: "inset-x-0 fixed top-0 py-5 bg-white/20",
        desktopDisplay: "w-full h-fit hidden lg:flex justify-around ",
        mobileDisplay: "w-full h-fit block lg:hidden",
        ul1: "list-none space-x-6 inline-flex font-hindVadodara",
        navTitle: "font-Playfair font-bold text-xl",
        ul2: "list-none space-x-3 inline-flex w-fit",
        navButtons: "w-10 h-10 rounded-tl-3xl rounded-br-3xl rounded-tr-2xl rounded-bl-2xl border border-gray-500/30 p-3",
        dummyStabilizer: "w-24",
    }

    return <div className={className.navContainer}>
        <div className={className.desktopDisplay}>
            <ul className={className.ul1}>
                <li><a className="font-bold border-b-4 border-yellow-300" href="#">Home</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
            <h1 className={className.navTitle}>
                Toms Agency
            </h1>
            <ul className={className.ul2}>
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

        </div>
    </div>
}

export default Navbar;