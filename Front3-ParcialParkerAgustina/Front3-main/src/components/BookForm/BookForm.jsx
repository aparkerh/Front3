import "./BookForm.css";

export default function BookForm({ form, createBook, changed, message }) {
  const saveBook = (e) => {
    e.preventDefault();

    createBook(form);
  };

  return (
    <form onSubmit={saveBook} className="form">
      <h1>Crear Libro</h1>
      <div className="container_input_form">
        <label htmlFor="title" className="label_form">
          Titulo del libro
        </label>
        
        <input
          type="text"
          name="title"
          onChange={changed}
          placeholder="Ingrese un titulo"
        />
      </div>

      <div className="container_input_form">
        <label htmlFor="description" className="label_form">
          Descripcion del libro
        </label>
        <textarea
          name="description"
          onChange={changed}
          placeholder="Ingrese una descripcion del libro"
        ></textarea>
      </div>
      
      <button type="submit" className="btn_save">
        Agregar a la biblioteca
      </button>
      <h5>{message}</h5>
    </form>
  );
}
