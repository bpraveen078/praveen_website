import * as React from "react";

export interface IAppProps {}

export const Skills: React.FC = (props: IAppProps) => {
  const today = new Date();
  const past = new Date("2014-Dec-15");
  function calcDate(date1: any, date2: any) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);
    var month = Math.round(days % 30);
    var message = "";
    message += years + " years ";
    message += month + " months ";

    return message;
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <h2 className="underline"></h2>
        </div>
        <div className="col-sm-8 content">
          <ul className=" skills">
            <li className="skill-item">
              Total 5.4 years of professional IT experience in the field of
              Software Development{" "}
            </li>
            <li className="skill-item">
              2.5 Year of Experience on React Js, Redux, Redux-Saga and React
              Hooks.
            </li>
            <li className="skill-item">
              3+ Years of Experience on Angular Js, Angular{" "}
            </li>
            <li className="skill-item">
              {" "}
              4 years of experience in Microsoft Technologies using C#, ASP.NET,
              MVC, WebApi, Entityframework, Sql Server 2012,2014{" "}
            </li>
            <li className="skill-item">
              2 Year of Experience on Dot Net Core.{" "}
            </li>
            <li className="skill-item">
              3+ years of experience in Material Design, Bootstrap, HTML, CSS,
              JavaScript, Typescript. and Jquery{" "}
            </li>
            <li className="skill-item">
              Experience with common front-end development tools such as on
              Angular CLI, Webpack, Babel, npm and yarn,
            </li>
            <li className="skill-item">1 year of experience in Node js</li>
            <li className="skill-item">
              Having knowledge on RabitMQ and NServiceBUS
            </li>
            <li className="skill-item">
              Familiarity with newer specifications of EcmaScript
            </li>
            <li className="skill-item">
              Having good knowledge on GitHub, TFS, Stash, BitBucket and
              SourceTree
            </li>
            <li className="skill-item">Having basic knowledge on MongoDB</li>
            <li className="skill-item">
              {" "}
              Knowledge on Immutable Js, Reselect and Lerna package builder
            </li>
            <li className="skill-item">
              Knowledge on Karma, Jest and Cypress for unit testing
            </li>
            <li className="skill-item">knowledge on jwt authentication</li>
            <li className="skill-item">Knowledge on Python</li>
            <li className="skill-item">Knowledge on Blazor</li>
          </ul>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
