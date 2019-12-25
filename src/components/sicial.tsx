import * as React from "react";

export interface IAppProps {}

export const Social: React.FC = (props: IAppProps) => {
  return (
    <div>
      <ul className="social">
        <li>
          <a href="http://facebook.com/tim.baker.906">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://twitter.com">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://googleplus.com/tbakerx">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tim-baker-8420009a/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/tbaker_x">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="http://github.com/tbakerx">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="http://skype.com">
            <i className="fa fa-skype"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
