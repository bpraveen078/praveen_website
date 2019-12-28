import * as React from "react";

export interface IAppProps {}

export const Works: React.FC = (props: IAppProps) => {
  return (
    <div className="section-child works">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <h2 className="underline">Works</h2>
        </div>
        <div className="col-sm-8 content">
          <h2>Techraq Info Solutions Private Limited</h2>
          <div className="row">
            <div className="col-sm-2">
              <i className="fa fa-calendar"></i>
              &nbsp;Period&nbsp;&nbsp;&nbsp;&nbsp; :
            </div>
            <div className="col-sm-8">From - 2014 to Present</div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <i className="fas fa-map-marker-alt"></i>
              &nbsp;Address&nbsp;&nbsp;&nbsp;:
            </div>
            <div className="col-sm-8">
              # 401,4th Floor, S M Reddy Complex,H No.1-98/8/9/A,Plot No.4,Near
              Image Garden Function Hall, Image Gardens Lane, Madhapur,
              Hyderabad, Telangana 500081
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <i className="fas fa-link"></i>&nbsp;Website&nbsp; :
            </div>
            <div className="col-sm-8">
              <a href="http://www.techraq.com/" target="_blank">
                http://www.techraq.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
