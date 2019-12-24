import React, { useEffect, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

import layout_bg from "./images/layout_bg.jpg";
import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";

const App: React.FC = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  });
  return (
    <div className="App">
      <div id="wrapper">
        <Header />
        <div className="header-background">
          <div className="praveen-title">
            {/* Praveen Kumar */}
            {/* <img className="praveen-image" src={praveen_image}></img> */}
          </div>
        </div>
        <div>
          <div>
            <Element name="about" className="element">
              <About />
            </Element>
            <Element name="works" className="element">
              works
            </Element>
            <Element name="resume" className="element">
              resume
            </Element>
            <Element name="contact" className="element">
              contact
            </Element>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
