import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

import "./Layout.css";
import Main from "./Main";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
