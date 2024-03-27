import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "./Context/books";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>up</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
