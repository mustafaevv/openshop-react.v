import React, { useEffect, useState } from "react";

import ProductLaptop from "../../components/ProductLaptop";
import Container from "../../layout/Container";

import classes from "./Laptops.module.scss";
const Laptops = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/computers");
      const cards = await res.json();
      setData(cards);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container className={classes["container"]}>
        <h2 className={classes["title"]}>Computers & Laptop</h2>
        <div className={classes["cart"]}>
          {data &&
            data.map((item) => (
              <ProductLaptop
                key={item.id}
                className={classes["cart__item"]}
                data={item}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default Laptops;
