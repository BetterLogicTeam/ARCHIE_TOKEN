import React from 'react'
import "./Team_kyc.css"
import assr from "../Assests/rndm.png"
import caat_token from "../Assests/cat_token.png"

function Team_kyc() {
    return (
        <div className='container-fuild pb-5 pt-3 bg-black'>
            <div className="heading d-flex align-items-center justify-content-center">
                <h1 className='team'>Team <span className='yc'>/ KYC</span></h1>
            </div>

            <div className="heading_2">
                <div className="arcc_layer text-center">
                    <h1 className='arrccn'>Arccoin <span className='yc text-white'>KYC</span> </h1>

                    <div className="assure text-center mt-4">
                        <a href="#" className="ank">
                            <img src={assr} alt="" className='main_assur_pic' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-5 m-0 p-0">
                <div className="cat_box_titel text-center">
                    <h1 className='arcon'>Arccoin <span className='yc text-white'>Team</span></h1>
                </div>

                <div className="col-lg-4 text-center">
                    <div className="tem_item">
                        <div className="team_cor_img">
                            <img src={caat_token} alt="" className='token_immg' />
                            
                            <div class="team_social">
                                <a class="m-2 uper_aa" href="#">
                                    <i class="fa fa-envelope-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='jp p-4 text-center'>
                        <h5 className='jp_heading'>JP</h5>
                        <span className='jp_heading_tow'>CEO / Founder</span>
                    </div>
                </div>

                <div className="col-lg-4 text-center">
                    <div className="tem_item">
                        <div className="team_cor_img">
                            <img src={caat_token} alt="" className='token_immg' />
                        </div>
                    </div>
                    <div className='jp p-4 text-center'>
                        <h5 className='jp_heading'>ARCHIE PHEONIX</h5>
                        <span className='jp_heading_tow'>Community Director</span>
                    </div>
                </div>

                <div className="col-lg-4 text-center">
                    <div className="tem_item">
                        <div className="team_cor_img">
                            <img src={caat_token} alt="" className='token_immg' />
                        </div>
                    </div>
                    <div className='jp p-4 text-center'>
                        <h5 className='jp_heading'>ARCHIE LEX</h5>
                        <span className='jp_heading_tow'>Marketing Director</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team_kyc
