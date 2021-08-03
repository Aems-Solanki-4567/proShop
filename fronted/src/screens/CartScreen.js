import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/cartAction";
import {
  Row,
  Col,
  Image,
  Form,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
function CartScreen({ match, location, history }) {
  const productid = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productid) {
      dispatch(addToCartAction(productid, qty));
    }
  }, [dispatch, productid, qty]);

  // console.log(qty);
  return (
    <div>
      <h1>Cart components</h1>
    </div>
  );
}

export default CartScreen;
