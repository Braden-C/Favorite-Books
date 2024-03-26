import { useState } from "react";
import BookCreate from "./BookCreate";
import "./index.css";

function App() {
  const [books, setBooks] = useState({});

  const createBook = (title) => {
    console.log("add book with title", title);
  };

  return (
    <div>
      App
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
