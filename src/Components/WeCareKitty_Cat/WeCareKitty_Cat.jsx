import React from 'react'
import kitty from "../Assests/kitty.svg"
import './WeCareKitty_Cat.css'

function WeCareKitty_Cat() {
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 cat_bg">
                <img src={kitty} alt="" />
            
            
             </div>
            <div className="col-md-6    mt-5 Prah">
                <p className=''>
                    
The story of Archie is true, the story of a cute, friendly, and fiercely loyal kitty. Founded in 2022, with a vision to generate wealth for a decentralized community in a safe and secure environment, leveraging Defi protocols and to impact the globe for good, thereby cherishing the memory of our beloved Archie.
The Archie Foundation reiterates our commitment to the welfare and upliftment of the weaker community to reflect our love and respect for each other.
                </p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default WeCareKitty_Cat
