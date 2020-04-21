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
          <div>
            <h2>Emids technologies</h2>
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-user-tag"></i>
                &nbsp;Desigination&nbsp;&nbsp;&nbsp;&nbsp; :
              </div>
              <div className="col-sm-8">Senior Software Engineer</div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-calendar"></i>
                &nbsp;Period&nbsp;&nbsp;&nbsp;&nbsp; :
              </div>
              <div className="col-sm-8">From - 20-Apr-2020 to Present</div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;Address&nbsp;&nbsp;&nbsp;:
              </div>
              <div className="col-sm-8">
                Hyderabad, India. Western Aqua 9th Floor, Whitefield Road HITEC
                City, Hyderabad – 500081
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="fas fa-link"></i>&nbsp;Website&nbsp; :
              </div>
              <div className="col-sm-8">
                <a href="https://www.emids.com/" target="_blank">
                  https://www.emids.com
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h2>Techraq Info Solutions Private Limited</h2>
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-user-tag"></i>
                &nbsp;Desigination&nbsp;&nbsp;&nbsp;&nbsp; :
              </div>
              <div className="col-sm-8">Software Engineer</div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-calendar"></i>
                &nbsp;Period&nbsp;&nbsp;&nbsp;&nbsp; :
              </div>
              <div className="col-sm-8">From - 01-Dec-2014 to 17-Apr-2020</div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;Address&nbsp;&nbsp;&nbsp;:
              </div>
              <div className="col-sm-8">
                # 401,4th Floor, S M Reddy Complex,H No.1-98/8/9/A,Plot
                No.4,Near Image Garden Function Hall, Image Gardens Lane,
                Madhapur, Hyderabad, Telangana 500081
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
        </div>

        <div className="col-sm-1"></div>
      </div>
      {/* <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-1"></div>
      </div> */}
    </div>
  );
};
