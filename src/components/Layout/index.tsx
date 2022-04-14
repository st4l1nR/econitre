import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsApp from "../../../public/icons/whatsapp.svg";

const Layout = ({ children }) => {
  return (
    <header>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <a
        href="https://wa.me/593962742657?lang=es"
        className="fixed bottom-0 left-0 p-3"
        target="_blank"
      >
        <WhatsApp className="transform scale-150" />
      </a>
    </header>
  );
};

export default Layout;
