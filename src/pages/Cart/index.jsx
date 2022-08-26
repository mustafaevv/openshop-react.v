import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import CartItem from "../../components/CartItem";
import Container from "../../layout/Container";
import Title from "../../components/Title";

import classes from "./Cart.module.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const cartEmpty = items.length === 0;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <Header />
      <Container>
        {cartEmpty ? (
          <Title />
        ) : (
          items.map((card) => <CartItem key={card.id} {...card} />)
        )}
        {!cartEmpty && (
          <div className={classes["info"]}>
            <p className={classes["info__desc"]}>Total:</p>
            <p className={classes["info__totalPrice"]}>{total} $</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
