import classNames from "classnames";
import React, { useState } from "react";
import {useDispatch} from 'react-redux'

import { addToCart } from "../../redux/cart";

import classes from "./ProductIPhone.module.scss";


const ProductIPhone = ({ className, data }) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(false);
  const handleClickButton = () => {
    setSelected((state) => !state)
    dispatch(addToCart(data))
  }
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

export default ProductIPhone;
