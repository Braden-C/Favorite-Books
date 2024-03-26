import { useState } from "react";
import BookCreate from "./BookCreate";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
    console.log(books.length);
  };

  return (
    <div>
      App
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
