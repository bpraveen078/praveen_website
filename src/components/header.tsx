import * as React from "react";

export interface IAppProps {}

export const Header: React.FC = (props: IAppProps) => {
  return (
    <div>
      <header id="js-header">
        <div className="container clearfix">
          <h1 id="logo">Resume</h1>
          <nav>
            <a href="#bacon">Bacon</a>
            <a href="#sausage">Sausage</a>
            <a href="#biltong">Biltong</a>
          </nav>
        </div>
      </header>
    </div>
  );
};
