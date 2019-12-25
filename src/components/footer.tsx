import * as React from "react";
import { Link } from "react-scroll";

export interface IAppProps {}

export const Footer: React.FC = (props: IAppProps) => {
  return (
    <footer>
      <div className="container clearfix">
        <div className="col" id="col-1">
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
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col" id="col-2">
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
        <div className="col" id="col-3">
          <ul>
            <li>SERVICES</li>
            <li>
              <a href="#0">Bacon</a>
            </li>
            <li>
              <a href="#0">Sausage Services</a>
            </li>
            <li>
              <a href="#0">Cheese</a>
            </li>
            <li>
              <a href="#0">Cider Apples</a>
            </li>
          </ul>
        </div>
        <div id="copy">
          &#xa9; Designed and built by <a href="">@pbanda</a> 2020
        </div>
      </div>
    </footer>
  );
};
