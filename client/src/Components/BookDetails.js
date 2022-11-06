import React from "react";
import Card from "react-bootstrap/Card";

function BookDetails() {
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        <Card.Title>Ky nghe lay Tay</Card.Title>
        <Card.Subtitle>Phong Su</Card.Subtitle>

        <p>Vu trong Phung</p>
        <p>90</p>
        <p>All books by this author</p>
        <ul>
          <li>Ky nghe lay Tay</li>
          <li>So do</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default BookDetails;
