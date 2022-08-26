import React from "react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import logo from "../../images/footer-logo.png";
import telegram from "../../images/telegram.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <Container>
        <p className={classes["footer__desc"]}>Subscribe to Newslatter</p>
        <div className={classes["footer__content"]}>
          <Link to="/">
            <img
              className={classes["footer__logo"]}
              src={logo}
              alt="Open Shop Logo"
            />
          </Link>
          <div className={classes["footer__item"]}>
            <form className={classes["footer__from"]}>
              <input className={classes["footer__input"]} type="search" />
              <button className={classes["footer__btn"]}>sing up</button>
            </form>
          </div>
          <div className={classes["footer__icons"]}>
            <img className={classes["footer__icon"]} src={telegram} alt="Telegram Logo" />
            <img className={classes["footer__icon"]} src={facebook} alt="Facebook Logo"/>
            <img className={classes["footer__icon"]} src={instagram} alt="Instagram Logo"/>
          </div>
        </div>
        <ul className={classes["footer__list"]}>
          <li>
            <a className={classes["footer__link"]} href="#!">
              News
            </a>
          </li>
          <li>
            <a className={classes["footer__link"]} href="#!">
              Help
            </a>
          </li>
          <li>
            <a className={classes["footer__link"]} href="#!">
              Contat
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
