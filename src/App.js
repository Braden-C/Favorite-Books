import { useEffect, useContext } from "react";
import BooksContext from "./Context/books";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import "./index.css";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
