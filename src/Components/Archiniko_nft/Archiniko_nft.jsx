import React from 'react'
import './Archiniko_nft.css'
import done from '../Assests/coin.png'
import rong from '../Assests/word.svg'


function Archiniko_nft() {
  return (
    <div className='archi'>
        <div className="container">
        <div className="row">
            <div className="col">
            <div className='img_set'>
                <img src={done} alt="Coin" className='wid ' />
    </div>
    <div className='img_set'>

                <img src={rong} alt="" className='wide' />
    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Archiniko_nft
