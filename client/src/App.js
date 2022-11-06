import "./App.css";
import Container from "react-bootstrap/container";
import BookList from "./Components/Booklist";
import Forms from "./Components/Forms";

function App() {
  return (
    <Container className="py-3 mt-3" style={{ backgroundColor: "lightcyan" }}>
      <h1 className="text-center text-info mb-3">My Books</h1>
      <hr />
      <Forms/>
      <hr />
      <BookList />
    </Container>
  );
}

export default App;
