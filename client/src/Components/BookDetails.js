import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { getSingleBook } from "../graphql-client/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  });

  if (loading) return <p>Loading book detail...</p>;
  if (error) {
    console.log(error.message);
    return <p>Error loading book detail!</p>;
  }

  const book = bookId !== null ? data.book : null;

  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <Fragment>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle>{book.genre}</Card.Subtitle>

            <p>{book.author.name}</p>
            <p>Age : {book.author.age}</p>
            <p>All books by this author</p>
            <ul>
              {book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  );
}

export default BookDetails;
