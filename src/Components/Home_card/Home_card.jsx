import React from 'react'
import "./Home_card.css"

function Home_card({main_heading,per_1,per_2,details}) {
  return (
    <div>
    <div className="main_card_bg">
    <h2 className='card_heading'>{main_heading}</h2>
    <div className="row justify-content-center">
        <div className="col-md-6 col-6  text-white">
        <div className='text-center'>
        <small>Buy</small>
            <h1>{per_1}</h1>
        </div>
         
        </div>
        <div className="col-md-6  col-6 text-white">

        <div className='text-center'>
        <small>sell</small>
            <h1>{per_2}</h1>
        </div>
          
        </div>
        <div className="col-md-12 text-white text-center">
            <p>{details}</p>
        </div>
    </div>

    </div>
      
    </div>
  )
}

export default Home_card
