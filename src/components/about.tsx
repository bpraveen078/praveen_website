import * as React from "react";
import praveen_image from "../images/praveen.jpg";
// @ts-ignore
import resume from "../images/Praveen_Resume.doc";

export interface IAppProps {
  years: string;
}

export const About: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <div className="section-child about">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <div className="my-img-section">
            <img className="my-img" src={praveen_image}></img>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="about-me">
            <h2>About Me</h2>
            <h5>I'm Praveen Kumar Banda,</h5>

            <div className="content-color-gray">
              <div>I'm full-stack developer,</div>
              <div>
                For the past {props.years}, I've been developing applications using
                .NET & front end technologies.
              </div>
              <div>
                I spend a lot of time learning new techniques and actively help
                other people learn web development through a variety of help
                groups and writing web development tutorials for my website and
                blog about advancements in web design and development.
              </div>
              <div>
                Besides programming I love spending time with friends and family
                and can often be found together going out catching the latest
                movie.
              </div>
            </div>
          </div>
          <br />
          <br />
          <h2>Contact Details</h2>
          <div className="row content-color-gray">
            <div className="col-sm-4">
              <span className="span-about-contact-label">Name</span>
              : Praveen Kumar Banda
              <br />
              <span className="span-about-contact-label">Area</span>
              : Madhapur,
              <br />
              <span className="span-about-contact-label">City</span>
              : Hyderabad
              <br />
              <span className="span-about-contact-label">Postal Code</span>:
              500081
              <br />
              <span className="span-about-contact-label">Email 1</span>:
              praveen@pbanda.in
              <br />
              <span className="span-about-contact-label">Email 2</span>:
              bpraveendev@gmail.com
              <br />
              <span className="span-about-contact-label">Mobile</span>:+91
              9866078078
            </div>
            <div className="col-sm-3">
              {" "}
              <a className="button-download" href={resume}>
                <i className="fa fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
