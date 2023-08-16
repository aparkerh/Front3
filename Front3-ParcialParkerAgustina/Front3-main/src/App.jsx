import { useEffect, useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BookList from "./components/BookList/BookList";
import { book as data } from "./helpers/books";
import { useForm } from "./hooks/useForm";
import { validate } from "./helpers/validate";

function App() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");
  const { form, changed } = useForm({});

  useEffect(() => {
    setBooks(data);
  }, []);

  const createBook = (book) => {
    const { title, description } = book;
    const msg = validate(title, description);

    if (msg.type === "Error") {
      return setMessage(msg.body.message);
    }

    setBooks([
      ...books,
      {
        id: books.length,
        title,
        description,
      },
    ]);
  };

  const deleteBook = (bookId) => {
    const res = confirm("Va a eliminar este libro");
    res ? setBooks(books.filter((book) => book.id != bookId)) : null;
  };

  return (
    <>
      <Header />
      <main className="main">
        <BookList books={books} deleteBook={deleteBook} />
        <section>
          <BookForm
            form={form}
            changed={changed}
            createBook={createBook}
            message={message}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
