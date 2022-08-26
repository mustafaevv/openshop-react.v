import React, { useEffect, useState } from "react";

import ProductIWatch from "../../components/ProductIWatch";
import Container from "../../layout/Container";

import classes from "./IPhone.module.scss";
const IWatch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/smartWatch");
      const cards = await res.json();
      setData(cards);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container className={classes["container"]}>
        <h2 className={classes["title"]}>Top seller</h2>
        <div className={classes["cart"]}>
          {data &&
            data.map((item) => (
              <ProductIWatch
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

export default IWatch;
