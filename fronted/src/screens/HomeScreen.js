import React, { /* useState*/ useEffect } from "react";
// import products from "../products";
// import axios from "axios";
import ProductsScreen from "./ProductsScreen";
import { Row, Col } from "react-bootstrap";
import { listOfProducts } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import ErrorMessage from "../components/shared/ErrorMessage";
function HomeScreen(props) {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productsList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listOfProducts());
    // const fetchProduct = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProduct();
  }, [dispatch]);

  // const products = [];
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} md={3}>
                <ProductsScreen product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsList,
  };
};
// const ConnectedHomeScreen = Connect(mapStateToProps)(HomeScreen);
export default HomeScreen;
