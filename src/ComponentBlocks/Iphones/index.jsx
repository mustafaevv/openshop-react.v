import React, { useEffect, useState } from "react";
import ProductIPhone from "../../components/ProductIPhone";
import Container from "../../layout/Container";

import classes from "./IPhone.module.scss";
const IPhones = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/iPhones");
      const cards = await res.json();
      setData(cards);
    };
    fetchData()
  }, []);
  return (
    <>
      <Container className={classes["container"]}>
        <h2 className={classes["title"]}>Cell Phone</h2>
        <div className={classes["cart"]}>
          {data &&
            data.map((item) => (
              <ProductIPhone
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

export default IPhones;
