import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../../images/logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img src={logo} alt="COVID-19 Logo" className={styles.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
