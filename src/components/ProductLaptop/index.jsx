import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import classes from "./ProductLaptop.module.scss";
import { addToCart } from "../../redux/cart";

const ProductLaptop = ({ className, data }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const handleClickButton = () => {
    dispatch(addToCart(data));
    setSelected((state) => !state);
  };
  return (
    <div className={classNames(classes["product"], className)}>
      <img
        className={classes["product__image"]}
        src={data.image}
        alt={data.name}
      />
      <h5 className={classes["product__name"]}>{data.name}</h5>
      <p className={classes["product__price"]}>{data.price} $</p>
      <button
        className={classNames(
          classes["product__button"],
          selected && classes["product__button_selected"]
        )}
        onClick={handleClickButton}
      >
        {selected ? "added" : "add to cart"}
      </button>
    </div>
  );
};

export default ProductLaptop;
