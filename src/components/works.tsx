import * as React from "react";

export interface IAppProps {}

export const Works: React.FC = (props: IAppProps) => {
  return (
    <div className="works">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <h2 className="underline">Works</h2>
        </div>
        <div className="col-sm-8 content">
          <h2>Techraq Info Solutions Private Limited</h2>
          <div>Working as Software Engineer since 2014</div>
          <div></div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
