import React from "react";
import classNames from "classnames";

import classes from "./Title.module.scss";

const Title = ({ className }) => {
  return (
    <h1 className={classNames(classes["title"], className)}>
      Cart is empty 😕
    </h1>
  );
};

export default Title;
