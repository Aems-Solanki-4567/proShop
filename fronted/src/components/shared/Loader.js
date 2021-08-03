import React from "react";
import { Spinner } from "react-bootstrap";
function Loader(props) {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        marginTop: "50vh",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;
