import * as React from "react";

export interface IAppProps {}

export const Contact: React.FC = (props: IAppProps) => {
  return (
    <div className="section-child contact">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <h2 className="underline">Contact</h2>
        </div>
        <div className="col-sm-8 content">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                {
                  // @ts-ignore
                  <label for="name">Name</label>
                }
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6">
                {
                  // @ts-ignore
                  <label for="email">Email</label>
                }
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-12">
                {
                  // @ts-ignore
                  <label for="subject">Subject</label>
                }
                <input
                  type="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group col-md-12">
                {
                  // @ts-ignore
                  <label for="message">Message</label>
                }
                {
                  <textarea
                    className="form-control"
                    id="message"
                    //@ts-ignore
                    rows="3"
                  ></textarea>
                }
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
