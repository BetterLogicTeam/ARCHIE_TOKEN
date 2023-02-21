import React from 'react'
import './Contact_form.css'
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";


function Contact_form() {
    return (
        <>
            <div className="container-fluid main_color  pt-5 ">
                <div className="row form_border">
                    <div className="col-md-6 Contact_bg">
                        <div className="row justify-content-center my-5 ">
                            
                                
                                <div className='d-flex justify-content-center  my-4'>
                                <div className="col-md-5 ps-3">
                                    <input type="text" placeholder='Your Name' className='contact_input ' />
                                </div>
                                <div className="col-md-5 ps-5">
                                    <input type="text" placeholder='Your Email' className='contact_input '/>
                                </div>  
                                </div>
                                

                            
                         <div className="row justify-content-center">
                         <div className="col-10 ">
                                <textarea id="w3review" className='contact_input mn' placeholder='Massage' name="w3review" rows="6" cols="60"></textarea>
                            </div>
                         </div>

                            <div className='col-md-10'>
                                <button type="button" class="btn btn-lg btn_from w-100 text-white ">SEND MASSAGE </button>
                            </div>

                        </div>

                    </div>
                     {/* <div className="col-md-6 icon_bg">

                        <div className='d-flex justify-content-evenly mt-5 i-con'>

                            <BsFacebook />
                            <FaTelegramPlane />
                            <AiFillInstagram />
                            <FaTiktok />

                        </div>
                        <div className='d-flex justify-content-evenly mt-5 i-con'>

                            <AiFillYoutube />
                            <AiOutlineTwitter />
                            <FaDiscord />
                            <FaAndroid />
                        </div>





                    </div>  */}
                </div>
            </div>
        </>
    )
}

export default Contact_form
