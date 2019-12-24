import React from "react";
import logo from "./logo.svg";
import layout_bg from "./images/layout_bg.jpg";
import "./App.css";
import { Header } from "./components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />
        <div id="main" className="main" style={{ height: "500px" }}></div>
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
              &#xa9; Designed and built by{" "}
              <a href="https://twitter.com/lilianakastilio">@liianakastilio</a>{" "}
              2013 - 2014
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
