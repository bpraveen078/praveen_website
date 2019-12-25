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
import { Social } from "./components/sicial";
import { Education } from "./components/education";
import { Works } from "./components/works";
import SkillsStack from "./components/skills-stack";
import { Skills } from "./components/skills";

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
        <Element name="home" className="element">
          <Header />
          <div className="header-background">
            <div className="praveen-title">
              Praveen Kumar
              <div className="my-role">Full stack Developer</div>
              <div>
                <Social />
              </div>
            </div>
          </div>
        </Element>

        <div>
          <div>
            <Element name="about" className="element">
              <About />
            </Element>
            <Element name="education" className="element">
              <Education />
            </Element>
            <Element name="works" className="element">
              <Works />
            </Element>
            <Element name="skills" className="element">
              <SkillsStack />
              <Skills />
            </Element>
            {/* <Element name="contact" className="element">
              contact
            </Element> */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
