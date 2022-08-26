import React from "react";

import Container from "../../layout/Container";
import playstation from "../../images/playstation.png";
import playstation_logo from "../../images/playstation-logo.png";

import classes from "./Playstation.module.scss";

const Playstation = () => {
  return (
    <Container>
      <div className={classes["item"]}>
        <div className={classes["item__left"]}>
          <img
            className={classes["item__left-image"]}
            src={playstation_logo}
            alt="Playstation Logo"
          />
          <h3 className={classes["item__left-title"]}>PlayStation 5 Console</h3>
          <button className={classes["item__left-button"]}>watch now</button>
        </div>
        <div className={classes["item__right"]}>
          <img
            className={classes["item__right-image"]}
            src={playstation}
            alt="Playstation"
          />
        </div>
      </div>
    </Container>
  );
};

export default Playstation;
