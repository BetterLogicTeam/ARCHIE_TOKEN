import React from "react";
import "./Main_footer.css";
import { AiFillInstagram, AiFillMessage, AiFillRedditCircle, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import {FaDiscord } from "react-icons/fa"
import {RiMusicFill  } from "react-icons/ri"
import {BsFacebook, BsTelegram } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Main_footer() {
  return (
    <div className="main_footer_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-3">
            <h4 className="clr text-uppercase">Get In Touch</h4>
            <div className="d-flex align-items-center py-2">
              <div className="message text-white">
                <AiFillMessage />
              </div>
              <span className="text-white touch_here ms-2">info@archieneko.com</span>
            </div>
            <div className="d-flex align-items-center py-2">
              <div className="message text-white">
                <AiFillMessage />
              </div>
              <span className="text-white touch_here ms-2">sales@archieneko.com</span>
            </div>
            <div className="d-flex align-items-center py-2">
              <div className="message text-white">
                <AiFillMessage />
              </div>
              <span className="text-white touch_here ms-2">marketing@arcko.com</span>
            </div>
            <div className="d-flex align-items-center py-2">
              <div className="message text-white">
                <AiFillMessage />
              </div>
              <span className="text-white touch_here ms-2">support@archieneko.com</span>
            </div>
          </div>

          {/* quick links section  */}

          <div className="col-md-4 py-3">
            <h4 className="clr text-uppercase">QUICK LINKS</h4>
            <div className="d-flex align-items-center py-2 ">
              <div className="message text-white quick_links_footer">
                <IoIosArrowForward />
              <span className=" ms-2 ">Home</span>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 ">
              <div className="message  quick_links_footer">
                <IoIosArrowForward />
              <span className=" ms-2 ">Team / KYC</span>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 ">
              <div className="message  quick_links_footer">
                <IoIosArrowForward />
              <span className=" ms-2 ">Audit Report</span>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 ">
              <div className="message text-white quick_links_footer">
                <IoIosArrowForward />
              <span className=" ms-2 ">White Paper</span>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 ">
              <div className="message text-white quick_links_footer">
                <IoIosArrowForward />
              <Link to='/contact_us' className="quick_links_footer text-decoration-none"> <span className=" ms-2 ">Contact Us</span></Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3">
            <h4 className="clr">SOCIAL MEDIA</h4>
            <div className="row py-3">
              <div className="col-md-3 col-3">
                <BsTelegram className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <AiOutlineTwitter className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <FaDiscord className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillInstagram className='soical_footer_liks'/>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3">
                <BsFacebook className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <RiMusicFill className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillRedditCircle className='soical_footer_liks'/>
              </div>
              <div className="col-md-3 col-3">
                <AiFillYoutube className='soical_footer_liks'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
