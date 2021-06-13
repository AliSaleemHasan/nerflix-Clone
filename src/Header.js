import React, { useState, useEffect } from "react";
import "./Header.css";
function Header() {
  const [back, setBack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setBack(true) : setBack(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`header ${back && "header__black"}`}>
      <div className="header__left">
        <img src="Logo.png" alt="ALiFlix Logo" />
      </div>
      <div className="header__right">
        <p>By: ALI Saleem Hasan. </p>
      </div>
    </div>
  );
}

export default Header;
