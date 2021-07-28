import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { detailsProduct } from "../redux/actions/productAction";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  // const product = data.products.find((x) => x._id === props.match.params.id)
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productID = props.match.params.id;
    
  useEffect(() => {
    dispatch(detailsProduct(productID));
  }, [dispatch, productID]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productID}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <Link to="/">Back to Result</Link>
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </li>
              <li>Price : {product.price} TL</li>
              <li>
                Description <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">{product.price} TL</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success"> In Stock</span>
                      ) : (
                        <span className="error">Unvailable</span>
                      )}{" "}
                    </div>
                  </div>
                </li>
                {product.countInStock > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(parseInt(product.countInStock)).keys()].map(
                                (x) => (
                                    
                                    <option value={x + 1} key={x + 1}>{x + 1}</option>
                                     
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={addToCartHandler}
                        className="primary block"
                      >
                        Add To Cart
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductScreen;
