import React, { useState, useEffect } from "react";
import praveen_image from "../images/praveen.jpg";
import { Link } from "react-scroll";
import {
  isMobile
} from "react-device-detect";
import "../menu-styles.css";

export interface IAppProps { }

export const Header: React.FC = (props: IAppProps) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenuClick = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <div>
      <header id="js-header">
        {isMobile && (
          <div className="my-img-mobile-container">
            <div className="">
              <img
                alt="praveenimage"
                id="my-img-mobile"
                className="my-img-mobile-hide"
                src={praveen_image}
              ></img>
            </div>
            <div className="menu-icon">
              <i onClick={toggleMenuClick} className="fa fa-bars"></i>
            </div>
          </div>
        )}

        <div className="container clearfix">
          <nav className={isOpen ? "nav-mobile" : "hide-menu"}>
            <Link
              activeClass="active"
              className="menu-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
            >
              Education
            </Link>

            <Link
              activeClass="active"
              className="menu-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="works"
              spy={true}
              smooth={true}
              duration={500}
            >
              Works
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
