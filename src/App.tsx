import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import {
  Element
} from "react-scroll";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import React from "react";
import SkillsStack from "./components/skills-stack";
import { Works } from "./components/works";

// import logo from "./logo.svg";

// import layout_bg from "./images/layout_bg.jpg";




// import { Social } from "./components/sicial";



// import { Skills } from "./components/skills";


const App: React.FC = () => {
  // useEffect(() => {
  //   Events.scrollEvent.register("begin", function() {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function() {
  //     console.log("end", arguments);
  //   });
  // });
  // useEffect(() => {}, []);
  // useEffect(() => {
  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);

  function calcDate() {
    const date1 = new Date();
    const date2 = new Date('01-Dec-2014');
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);
    var month = Math.round(months % 12);
    var message = "";
    message += years + " years ";
    message += month + " months ";

    return message;
  }
  return (
    <div className="App">
      <div id="wrapper">
        <Element name="home" className="element">
          <Header />
          <div className="header-background">
            <div className="praveen-title">
              <div>
                Praveen Kumar
                <div className="my-role">Full stack Developer</div>
                <div className="my-caption">Never stop learning... Never stop coding...</div>
                <div>{/* <Social /> */}</div>
              </div>
            </div>
          </div>
        </Element>

        <div>
          <div>
            <Element name="about" className="element">
              <About years={calcDate()} />
            </Element>
            <Element name="education" className="element">
              <Education />
            </Element>

            <Element name="skills" className="element">
              <SkillsStack years={calcDate()} />
            </Element>
            <Element name="works" className="element">
              <Works />
            </Element>
            <Element name="contact" className="element">
              <Contact />
            </Element>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
