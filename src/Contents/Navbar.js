/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hoverDesktop, setHoverDesktop] = useState(false);
  const [hoverMobile, setHoverMobile] = useState(false);

  useNavigate();

  const onMouseEnter = () => {
    setHoverDesktop(true);
    setHoverMobile(true);
  };

  const onMouseLeave = () => {
    setHoverDesktop(false);
    setHoverMobile(false);
  };

  var HomeSect, AboutSect, ServiceSect, ContactSect;

  if (window.location.hash === "") {
    HomeSect = `visible w-6 absolute inset-x-0 bg-yellow-400 -z-[1] transform duration-500`;
    AboutSect = `w-0 invisible`;
    ServiceSect = `w-0 invisible`;
    ContactSect = `w-0 invisible`;
  } else if (window.location.hash === "#AboutUs") {
    AboutSect = `visible w-6 absolute inset-x-0 bg-yellow-400 -z-[1] transform duration-500`;
    HomeSect = `w-0 invisible`;
    ServiceSect = `w-0 invisible`;
    ContactSect = `w-0 invisible`;
  } else if (window.location.hash === "#Services") {
    ServiceSect = `visible w-6 absolute inset-x-0 bg-yellow-400 -z-[1] transform duration-500`;
    ContactSect = `w-0 invisible`;
    HomeSect = `w-0 invisible`;
    AboutSect = `w-0 invisible`;
  } else if (window.location.hash === "#ContactUs") {
    ContactSect = `visible w-6 absolute inset-x-0 bg-yellow-400 -z-[1] transform duration-500`;
    ServiceSect = `w-0 invisible`;
    AboutSect = `w-0 invisible`;
    HomeSect = `w-0 invisible`;
  } else {
    HomeSect = `w-0 invisible`;
    AboutSect = `w-0 invisible`;
    ServiceSect = `w-0 invisible`;
    ContactSect = `w-0 invisible`;
  }

  const className = {
    navContainer: `inset-x-0 absolute top-0 py-5 transform duration-200 z-50 ${
      hoverDesktop || hoverMobile ? "bg-white h-auto" : "bg-white/50 h-20"
    }`,
    desktopDisplay: "w-full h-fit hidden lg:flex justify-around",
    mobileDisplay: `w-full grid place-items-center lg:hidden transform duration-200 ${
      hoverDesktop || hoverMobile ? "h-fit" : "h-20"
    }`,
    collapsibleMenu: `${
      hoverMobile ? "visible bg-white" : "invisible bg-transparent"
    } py-5 w-full h-fit text-center -z-10 transform duration-200`,
    ul1: "list-none space-x-6 inline-flex font-hindVadodara",
    ul1Mob: `list-none space-y-2 font-hindVadodara ${
      hoverMobile ? "visible" : "invisible"
    }`,
    ul1Links: "font-bold relative z-20",
    titleContainer: "w-fit",
    underline: {
      first: `${HomeSect} h-0.5 top-5`,
      second: `${AboutSect} h-0.5 top-5`,
      third: `${ServiceSect} h-0.5 top-5`,
      fourth: `${ContactSect} h-0.5 top-5`,
    },
    underlineMob: {
      first: `${hoverMobile ? HomeSect : "hidden"} h-1 top-4`,
      second: `${hoverMobile ? AboutSect : "hidden"} h-1 top-4`,
      third: `${hoverMobile ? ServiceSect : "hidden"} h-1 top-4`,
      fourth: `${hoverMobile ? ContactSect : "hidden"} h-1 top-4`,
    },
    navTitle: "font-Playfair font-bold text-xl",
    ul2: "list-none space-x-3 inline-flex w-fit",
    ul2Mob: `list-none space-x-3 inline-flex w-fit ${
      hoverMobile ? "visible" : "invisible"
    }`,
    navButtons:
      "w-10 h-10 rounded-tl-3xl rounded-br-3xl rounded-tr-2xl rounded-bl-2xl border border-gray-500/30 p-3",
    dummyStabilizer: "w-24",
  };

  return (
    <div className={className.navContainer}>
      <div className={className.desktopDisplay}>
        <ul
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={className.ul1}
        >
          <li>
            <a className={className.ul1Links} href="#Home">
              Home
              <div className={className.underline.first} />
            </a>
          </li>
          <li>
            <a className={className.ul1Links} href="#AboutUs">
              About Us
              <div className={className.underline.second} />
            </a>
          </li>
          <li>
            <a className={className.ul1Links} href="#Services">
              Services
              <div className={className.underline.third} />
            </a>
          </li>
          <li>
            <a className={className.ul1Links} href="#ContactUs">
              Contact Us
              <div className={className.underline.fourth} />
            </a>
          </li>
        </ul>
        <div className={className.titleContainer}>
          <a href="#Home">
            <h1
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={className.navTitle}
            >
              Toms Agency
            </h1>
          </a>
        </div>

        <ul
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={className.ul2}
        >
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
          <h1
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={className.navTitle}
          >
            Toms Agency
          </h1>
        </div>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={className.collapsibleMenu}
        >
          <ul className={className.ul1Mob}>
            <li>
              <a href="#Home" className={className.ul1Links}>
                Home
                <div className={className.underlineMob.first} />
              </a>
            </li>
            <li>
              <a href="#AboutUs" className={className.ul1Links}>
                About Us
                <div className={className.underlineMob.second} />
              </a>
            </li>
            <li>
              <a href="#Services" className={className.ul1Links}>
                Services
                <div className={className.underlineMob.third} />
              </a>
            </li>
            <li>
              <a href="#ContactUs" className={className.ul1Links}>
                Contact Us
                <div className={className.underlineMob.fourth} />
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
  );
};

export default Navbar;
