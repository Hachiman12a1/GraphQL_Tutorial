import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AuthorForm from "./AuthorForm";
import BookForm from "./BookForm";

function Forms() {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  );
}

export default Forms;
