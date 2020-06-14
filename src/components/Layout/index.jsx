import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header className="layout__header" />
      <Main className="layout__main">{children}</Main>
      <Footer className="layout__footer" />
    </div>
  );
}

export default Layout;
