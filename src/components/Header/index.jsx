import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import logo from "../../images/logo.png";
import { links } from "../../router";

import classes from "./Header.module.scss";

const Header = () => {
  const [select, setSelect] = useState(false);
  const handleSelect = () => setSelect((state) => state);
  return (
    <header className={classes["header"]}>
      <div className={classes["header__top"]}>
        <Container className={classes["header__item"]}>
          <button onClick={handleSelect}>
            {select ? "English" : "Russian"}
          </button>
          <ul className={classes["header__list"]}>
            {links.map((item, index) => (
              <li key={index}>
                <Link className={classes["header__link"]} to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Container className={classes["header__end"]}>
        <Link to="/">
          <img
            className={classes["header__image"]}
            src={logo}
            alt="OpenShop Logo"
          />
        </Link>
        <form className={classes["header__from"]}>
          <input
            className={classes["header__input"]}
            type="search"
            placeholder="What are you looking for?"
          />
          <button className={classes["header__button"]}>
            search our store
          </button>
        </form>
      </Container>
    </header>
  );
};

export default Header;
