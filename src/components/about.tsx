import * as React from "react";
import praveen_image from "../images/praveen.jpg";

export interface IAppProps {}

export const About: React.FC = (props: IAppProps) => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-sm-2">
          <div className="my-img-section">
            <img className="my-img" src={praveen_image}></img>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="about-me">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="col-sm-2">aa</div>
      </div>
    </div>
  );
};
