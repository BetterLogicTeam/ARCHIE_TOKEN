import React from 'react'
import './Contact_form.css'
// import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
// import { AiFillYoutube } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaDiscord } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { AiFillInstagram, AiFillMessage, AiFillRedditCircle, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import {FaDiscord } from "react-icons/fa"
import {RiMusicFill  } from "react-icons/ri"
import {BsFacebook, BsTelegram } from "react-icons/bs"

function Contact_form() {
    return (
        <>
        <div className='main_contact_bg'>
        <div className="container">
            <div className="row justify-content-center box_contact">
            <div className="col-md-6">
                <div className="contact_form_main p-5">
                <div className="row g-3">
                    <div className="col-md-6">
                    <div>
                        <input className='contact_input' type="text" placeholder='Your Name' name="" id="" />
                    </div>

                    </div>
                    <div className="col-md-6">
                    <div>
                        <input className='contact_input' type="text" placeholder='Your Name' name="" id="" />
                    </div>

                    </div>
                </div>
              <div className="col-md-12 mt-4">
                <textarea className='contact_input' placeholder='Message' style={{height:'100px'}} name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="col-md-12">
                <button type='submit' className='send_message_btn mt-3 py-3'>Send Message</button>
              </div>
                    
                </div>
            </div>
            <div className="col-md-6 d-block m-auto ">
            <div className=" py-3">
            <div className="row py-3">
              <div className="col-md-3 col-3">
                <BsTelegram className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <AiOutlineTwitter className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <FaDiscord className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillInstagram className='soical_footer_liks coant_icon'/>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3">
                <BsFacebook className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <RiMusicFill className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillRedditCircle className='soical_footer_liks coant_icon'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillYoutube className='soical_footer_liks coant_icon'/>
              </div>
            </div>
          </div>
            </div>

            </div>
        </div>

        </div>
         
        </>
    )
}

export default Contact_form
