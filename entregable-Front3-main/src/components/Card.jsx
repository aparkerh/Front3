import React from 'react'

const Card = ({book}) => {

    return (
      
        <div className='Card' style={estilos}>
            
           
            <h1>Hola {book.name}!</h1>
            <h2>Tu libro favorito es {book.book}</h2>
            
        </div> 

        
    )
  }
  
  export default Card


