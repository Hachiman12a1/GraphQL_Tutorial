import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addSingleAuthor } from "../graphql-client/mutations";
import { getAuthors } from "../graphql-client/queries";

function AuthorForm() {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });

  const { name, age } = newAuthor;

  const onInputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
  };

  // GraphQL operations

  const [addAuthor, dataMutation] = useMutation(addSingleAuthor);

  const handleSubmit = (event) => {
    event.preventDefault();
    addAuthor({
      variables: {
        name,
        age : parseInt(age),
      },
      refetchQueries: [{ query: getAuthors }],
    });
    setNewAuthor({
      name: "",
      age: "",
    });
  };
  return (
    <Form onSubmit = {handleSubmit}>
      <Form.Group className="invisible">
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Author name"
          name="name"
          onChange={onInputChange}
          value={name}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Author age"
          name="age"
          onChange={onInputChange}
          value={age}
        />
      </Form.Group>

      <Button className="float-right" variant="info" type="submit">
        Add Author
      </Button>
    </Form>
  );
}

export default AuthorForm;
