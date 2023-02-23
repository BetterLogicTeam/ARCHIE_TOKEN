import React from "react";
import "./ARCHIE_PART.css";
import a from "../Assests/a.png";
import aa from "../Assests/aa.svg";
import aaa from "../Assests/aaa.svg";
import aaaaa from "../Assests/aaaaa.svg";
import aaaa from "../Assests/aaaa.svg";
import aaaaaa from "../Assests/aaaaaa.svg";
import aaaaaaa from "../Assests/aaaaaaa.svg";
import Latest_news_slides from "../Latest_news_slides/Latest_news_slides";
import Latest_news_slider from "../Latest_news_slider/Latest_news_slider";

export default function ARCHIE_PART() {
  return (
    <div className="main_archie_section">
      {/* archie pics secion  */}

      <div className="container" data-aos="fade-up"      data-aos-duration="1000">
        <img src={a} alt="" className="w-50 d-block m-auto" />
        <div className="row mt-5">
          <div className="col-md-4 mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1000" >
            <div className="arhie_pic">
              <img src={aa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1000">
            <div className="arhie_pic">
              <img src={aaa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1000">
            <div className="arhie_pic">
              <img src={aaaaa} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1500">
            <div className="arhie_pic">
              <img src={aaaa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1500">
            <div className="arhie_pic">
              <img src={aaaaaa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1500">
            <div className="arhie_pic">
              <img src={aaaaaaa} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1800">
            <div className="arhie_pic">
              <img src={aa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1800">
            <div className="arhie_pic">
              <img src={aaa} alt="" />
            </div>
          </div>
          <div className="col-md-4  mt-4 mt-md-0 " data-aos="fade-up"      data-aos-duration="1800">
            <div className="arhie_pic">
              <img src={aaaaa} className="w-75" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Latest news section */}

      <div className="container">
        <div className="text-white mt-4 text-center">
          {" "}
          <h1>
            {" "}
            <span className="clr"> Latest </span>News{" "}
          </h1>

          <Latest_news_slider/>
          {/* slider slides for latest news */}

        </div>
      </div>
    </div>
  );
}
