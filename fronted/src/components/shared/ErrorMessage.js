import React, { Children } from "react";
import { Alert } from "react-bootstrap";
function ErrorMessage({ variant, Children }) {
  return <Alert variant={variant}>{Children}</Alert>;
}

export default ErrorMessage;
