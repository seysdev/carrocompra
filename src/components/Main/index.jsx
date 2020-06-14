import React from "react";
import classNames from "classnames";
import "./Main.scss";

function Main({ children, className }) {
  return (
    <main className={classNames("main", className)}>
      <div className="container">{children}</div>
    </main>
  );
}

export default Main;
