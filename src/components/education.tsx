import * as React from "react";

export interface IAppProps {}

export const Education: React.FC = (props: IAppProps) => {
  return (
    <div className="section-child education">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <h2 className="underline">Education</h2>
        </div>
        <div className="col-sm-8 content">
          <h2>University</h2>
          <div>
            Bachelor of Technology in Jawaharlal Nehru Technological University
            Hyderabad,
          </div>
          <div>
            Specialization in Electronics and Communication Engineering,
          </div>
          <div>Batch 2012.</div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
