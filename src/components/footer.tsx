import * as React from "react";

export interface IAppProps {}

export const Footer: React.FC = (props: IAppProps) => {
  return (
    <footer>
      <div className="container clearfix">
        <div className="col" id="col-1">
          <ul>
            <li>APPLES</li>
            <li>
              <a href="#0">Home</a>
            </li>
            <li>
              <a href="#0">Services</a>
            </li>
            <li>
              <a href="#0">Contact</a>
            </li>
            <li>
              <a href="#0">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="col" id="col-2">
          <ul>
            <li>SOCIAL</li>
            <li>
              <a href="#0">Facebook</a>
            </li>
            <li>
              <a href="#0">Twitter</a>
            </li>
            <li>
              <a href="#0">LinkedIn</a>
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
