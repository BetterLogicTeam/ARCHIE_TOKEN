import React from 'react'
import done from '../Assests/coin.png'
import ro from '../Assests/c.svg'

function Archive_scan() {
  return (
    <div>
        <div className='archi'>
    <div className="container">
        <div className="row">
        <div className="col text-white">
         
            <div className='img_set'>
                <img src={done} alt="Coin" className='wid ' />
    </div>
    <div className='img_set'>

                <img src={ro} alt="" className='wide' />
    </div>
            </div>      
        </div>
    </div>
    </div>
    </div>
  )
}

export default Archive_scan
