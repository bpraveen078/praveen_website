import * as React from "react";
import { Link } from "react-scroll";
import "../menu-styles.css";

export interface IAppProps {}

export const Header: React.FC = (props: IAppProps) => {
  return (
    <div>
      <header id="js-header">
        <div className="pull-right menu-icon">
          <i className="fa fa-bars"></i>
        </div>
        <div className="container clearfix">
          <h1 id="logo"></h1>
          <nav>
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
              to="about"
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
