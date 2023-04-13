import React from "react";

const Header = () => {
  return (
    <div className="picture-container">
      <img
        src="/pellegrinonicola.jpg"
        className="portfolio-img"
        alt="personal picture"
      />
      <h2 className="header--name">Nicola Pellegrino</h2>
      <h4 className="header--job">Frontend Developer</h4>
      <a href="https://github.com/Nolekor" className="header--link">
        Nico's GitHub!
      </a>
    </div>
  );
};

export default Header;
