import React from "react";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
