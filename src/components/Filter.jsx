import React, { useContext } from "react";
import { AppContext } from "../store/Context";
import Ratings from "./Ratings";

const Filter = () => {
  const {
    filterProd: { byStock, byFastDeliver, sort },
    filterDispatch,
  } = useContext(AppContext);

  return (
    <>
      <div className="filterwrapper">
        <h3>Filter Products</h3>
        <div className="content-1">
          <input
            type="radio"
            name="ascending"
            id="ascending"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "lowTohigh" })
            }
            checked={sort === "lowTohigh" ? true : false}
          />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div className="content-1">
          <input
            type="radio"
            name="descending"
            id="descending"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "highTolow" })
            }
            checked={sort === "highTolow" ? true : false}
          />
          <label htmlFor="descending">Descending</label> 
        </div>
        <div className="content-1">
          <input
            type="checkbox"
            name="stock"
            id="stock"
            onChange={() => filterDispatch({ type: "FILTER_BY_STOCK" })}
            checked={byStock}
          />
          <label htmlFor="astock">Include Out Of Stock</label>
        </div>
        <div className="content-1">
          <input
            type="checkbox"
            name="delivery"
            id="adelivery"
            onChange={() => filterDispatch({ type: "FILTER_BY_DELIVER" })}
            checked={byFastDeliver}
          />
          <label htmlFor="delivery">Fast Delivery Only</label>
        </div>
        <Ratings />
      </div>
    </>
  );
};

export default Filter;
