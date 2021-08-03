import React, { useState, useEffect } from "react";
// import products from "../products";
// import axios from "axios";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listOfProductDetail } from "../actions/productAction";
import Loader from "../components/shared/Loader";
import ErrorMessage from "../components/shared/ErrorMessage";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductDetail({ history, match }) {
  // const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productListDetail = useSelector((state) => state.productDetail);
  const { product, error, loading } = productListDetail;

  useEffect(() => {
    dispatch(listOfProductDetail(match.params.id));
    // const fetchProduct = async () => {
    //   const { data } = await axios(`/api/products/${match.params.id}`);
    //   setProduct(data);
    // };
    // fetchProduct();
  }, [match, dispatch]);
  // const product = products.find((prod) => {
  //   return prod._id === props.match.params.id;
  // });

  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${qty}`);
  };

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <i className="fas fa-chevron-circle-left"></i>&nbsp;Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Row>
          <Col col={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col col={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : $ {product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col col={3}>
            <ListGroupItem>
              <Row>
                <Col>Status : </Col>
                <Col>
                  {product.countInStock > 0 ? "In stock" : "out of stock"}
                </Col>
              </Row>
            </ListGroupItem>
            {product.countInStock > 0 && (
              <ListGroupItem>
                <Row>
                  <Col>Qty</Col>
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )}
            <ListGroupItem>
              <Button
                type="button"
                className="btn w-100"
                onClick={addToCartHandler}
              >
                Add To Cart
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductDetail;
