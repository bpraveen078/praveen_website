import * as React from "react";
import { Link } from "react-scroll";

export interface IAppProps { }

export const Footer: React.FC = (props: IAppProps) => {
  return (
    <footer>
      <div className="container clearfix row">
        <div className="col" id="col-2">
          <ul>
            <li></li>
            <li>
              <Link
                activeClass="active"
                className="footer-menu-link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="footer-menu-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="footer-menu-link"
                to="education"
                spy={true}
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="footer-menu-link"
                to="works"
                spy={true}
                smooth={true}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="footer-menu-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col" id="col-3">
          <ul>
            <li>SOCIAL</li>
            <li>
              <a
                href="https://www.facebook.com/praveenkumar.banda1"
                target="_blanck"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rambpraveen" target="_blanck">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/praveen-kumar-banda"
                target="_blanck"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="col" id="col-4">
          <ul>
            <li>SERVICES</li>
            <li>
              <a href="#0">Web Development</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="copy">
        &#xa9; Designed and built by Praveen 2019
      </div>
      <div className="italic">
        Impossible is just an opinion.
      </div>
    </footer>
  );
};
