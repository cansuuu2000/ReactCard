import React from 'react'
import { useState } from 'react'


function Card(props) {
  const [showFullText,setShowFullText]=useState(false);
  function TextContinue(){
   setShowFullText(!showFullText)
  }
  return (
    < >
    
    <div className='card'>
    
      <div className='card-body'>
      
      <img src={props.img}/>
      <div className='about'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='cardDescription'>{props.description}
          {
            showFullText ? props.description : `${props.description.slice(0,20)}...`
          }
        </p>
      </div>

      </div>
      <button className='detay-buton' onClick={TextContinue}>
        {
          showFullText? " show" : "Details"
        }
      </button>
    </div>
    </>
  )
}

export default Card
