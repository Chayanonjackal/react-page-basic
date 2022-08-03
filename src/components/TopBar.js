import React from "react";
import classes from "./../components/TopBar.module.css";

const TopBar = () => {
  return (
    <header>
      <nav className={classes.TopBar}>
        <img
          src="https://i.dlpng.com/static/png/197684_preview.png"
          alt="Amazon logo"
        />
      </nav>
    </header>
  );
};

export default TopBar;
