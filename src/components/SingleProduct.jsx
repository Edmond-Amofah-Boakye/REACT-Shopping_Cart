import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { AppContext } from "../store/Context";

const SingleProduct = ({ allProducts }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  return (
    <>
      <div className="products">
        <Card key={allProducts.id}>
          <Card.Img
            variant="top"
            src={allProducts.image}
            alt={allProducts.name}
          />
          <Card.Body>
            <Card.Title>{allProducts.name}</Card.Title>
            <Card.Subtitle>¢{allProducts.price}</Card.Subtitle>
            <div className="products-btn">
              {cart.some((p) => p.id === allProducts.id) ? (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: allProducts })
                  }
                  style={{ backgroundColor: "red" }}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: allProducts })
                  }
                  disabled={allProducts.inStock === 0}
                  style={{ backgroundColor: "blue" }}
                >
                  {allProducts.inStock === 0 ? "Out of Stock" : "Add To Cart"}
                </button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
