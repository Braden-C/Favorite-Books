import { useEffect } from "react";
import useBooksContext from "./hooks/use-books-context";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import "./index.css";

function App() {
  const { fetchBooks } = useBooksContext();

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
