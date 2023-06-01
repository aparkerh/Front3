import React from 'react'

const Form = ({setBook, book}) => {
  return (
    <form>

        <label >Ingresa tu nombre</label>
        <input type="text" required minLength="3" onChange={(e) => setBook({...book, name: e.target.value})}/>
        <input type="submit" onClick="alert('click')" ></input>

        <label >Ingresa tu libro favorito</label>
        <input type="text" required minLength="6" onChange={(e) => setBook((prevBook) => ({...prevBook, book: e.target.value}))}/>
        <input type="submit" onClick="alert('click')" ></input>

        
        
    </form>
  )
}
export default Form