import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer(props) {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <span>Copyright &copy; Aems Solanki</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
