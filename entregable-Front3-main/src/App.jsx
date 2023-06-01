import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Card from './components/Card'


function App() {


    const [book, setBook] = useState({
        name: '',
        book: ''
      })

    return (
        
            <>
       
            <Form  book={book} setBook={setBook}/>         
            <Card book={book}/>

       </>
       
    )
}

export default App
