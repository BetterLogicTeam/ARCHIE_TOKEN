import React from 'react'
import "./Benifits_archie.css"
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

export default function Benifits_archie() {
  return (
    <div className='beinfits_main'>
  <h1 className='text-white text-center py-4'> <span className='clr'> Benefits </span> of Using <span className='clr'> ArchieToken </span></h1>
<div className="container">
    <div className="row">
       <div className="col-md-12">
       <Swiper
              spaceBetween={30}
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
              loop={true}

              className="mySwiper"
            >
              <SwiperSlide className="lastest_slidererr">
                <div className='benifits_main_card'>
                <h4 className='text-white'>Staking NFT</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Ubet&Win</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Near-Zero fee</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Stacking Token</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Staking NFT</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Buy Back & Burn</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
              <SwiperSlide className="lastest_slidererr">
              <div className='benifits_main_card'>
                <h4 className='text-white'>Low Taxes</h4>
                  {" "}
               
                </div>
              </SwiperSlide>
            </Swiper>
       </div>
    </div>
</div>

    </div>
  )
}
