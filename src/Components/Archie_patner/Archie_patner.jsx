import React from "react";
import "./Archie_patner.css";
import aa from "../Assests/aa.svg";
import aaa from "../Assests/aaa.svg";
import aaaaa from "../Assests/aaaaa.svg";
import aaaa from "../Assests/aaaa.svg";
import aaaaaa from "../Assests/aaaaaa.svg";
import aaaaaaa from "../Assests/aaaaaaa.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Latest_news_slides from "../Latest_news_slides/Latest_news_slides";

function Archie_patner() {
  return (
    <div className="patner_main_bg">
      <h1 className="text-white text-center">
        <span className="clr">Part</span>nars
      </h1>

      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            {" "}
            <Swiper
              spaceBetween={30}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaaaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaaaaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaaaaaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidere">
                <div>
                  {" "}
                  <img src={aaaaa} className="sdsd" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archie_patner;
