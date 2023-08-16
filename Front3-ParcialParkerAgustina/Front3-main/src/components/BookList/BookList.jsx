import Card from "../card/Card";
import "./BookList.css";

function BookList({ books, deleteBook }) {
  return (
    <section className="section_book">
      {books.length === 0 ? (
        <p>No hay libros</p>
      ) : (
        <div className="book_container">
          {books.map(({ id, title, description }, index) => {
            return (
              <Card
                key={index}
                id={id}
                title={title}
                description={description}
                deleteBook={deleteBook}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default BookList;
