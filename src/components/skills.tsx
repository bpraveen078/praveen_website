import * as React from "react";

export interface IAppProps { years: string; }

export const Skills: React.FC<IAppProps> = (props: IAppProps) => {


  return (
    <div className="">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <hr/>
        </div>
        <div className="col-sm-8 content">
          <ul className=" skills">
            <li className="skill-item">
              Total {props.years} of professional IT experience in the field of
              Software Development{" "}
            </li>
            <li className="skill-item">
              7+ Year of Experience on React, Redux, Redux-Saga, React
              Hooks, React Story book and ReCharts.
            </li>
            <li className="skill-item">
              7+ Years of Experience on Angular Js, Angular{" "}
            </li>
            <li className="skill-item">
              {" "}
              8+ years of experience in Microsoft Technologies using C#, ASP.NET,
              MVC, WebApi, Linq, Entityframework, Sql Server{" "}
            </li>
            <li className="skill-item">
              7+ Year of Experience on Dot Net Core.{" "}
            </li>
            <li className="skill-item">
              8+ years of experience in Material Design, Bootstrap, HTML, CSS,
              JavaScript, Typescript. and Jquery{" "}
            </li>
            <li className="skill-item">
              Experience with common front-end development tools such as on
              Angular CLI, Webpack, Babel, npm and yarn,
            </li>
            <li className="skill-item">1 year of experience in Node js and D3 js.</li>
            <li className="skill-item">
              Having knowledge on RabitMQ and NServiceBUS
            </li>
            <li className="skill-item">
              Familiarity with newer specifications of EcmaScript
            </li>
            <li className="skill-item">
              Having knowledge on GitHub, TFS, Stash, BitBucket and
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
            <li className="skill-item">Experience on jwt authentication and third party(Gmail, Facebook and Linkedin) authentication</li>
            <li className="skill-item">Knowledge on Python</li>
            <li className="skill-item">Knowledge on Microsoft Blazor</li>
            <li className="skill-item">Worked on React Native and generated apks </li>
            <li className="skill-item">Having experience on integrating third party services (SendGrid, Imi mobile sms,
              Expert pdf and string Template etc..)
            </li>
            <li className="skill-item">Worked under Agile scrum methodology</li>
          </ul>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
