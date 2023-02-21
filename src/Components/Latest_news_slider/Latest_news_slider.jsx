import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./Latest_news_slider.css";
import Latest_news_slides from "../Latest_news_slides/Latest_news_slides";

export default function Latest_news_slider() {
  return (
    <div className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="lastest_slidere">
                  {" "}
                  <Latest_news_slides
                    title_la="Open Letter from CEO Jan 23, 23"
                    para_la="  We have a 24 hr Voice Chat Available on Telegram and lot of you
            asked me why? That is the way to  give you the best assurance
            that someone is ......"
                    btn_la="Read More"
                  />
                </SwiperSlide>
                <SwiperSlide className="lastest_slidere">
                  <Latest_news_slides
                    btn_la="Read More"
                    title_la="Open Letter from CEO Jan 23, 23"
                    para_la="We have a 24 hr Voice Chat Available on Telegram and lot of you asked me why?  That is the way to give you the best assurance that someone is ...... "
                  />
                </SwiperSlide>
                <SwiperSlide className="lastest_slidere">   <Latest_news_slides
                    btn_la="Read More"
                    title_la="Open Letter from CEO Jan 23, 23"
                    para_la="We have a 24 hr Voice Chat Available on Telegram and lot of you asked me why?  That is the way to give you the best assurance that someone is ...... "
                  /></SwiperSlide>
                <SwiperSlide className="lastest_slidere">   <Latest_news_slides
                    btn_la="Read More"
                    title_la="Open Letter from CEO Jan 23, 23"
                    para_la="We have a 24 hr Voice Chat Available on Telegram and lot of you asked me why?  That is the way to give you the best assurance that someone is ...... "
                  /></SwiperSlide>
      
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
