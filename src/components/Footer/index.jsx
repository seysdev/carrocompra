import React from "react";
import classNames from "classnames";
import "./Footer.scss";

function Footer({ className }) {
  return (
    <footer className={classNames("footer", className)}>
      <div className="container">Footer</div>
    </footer>
  );
}

export default Footer;
