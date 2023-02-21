// import React from 'react'
import "./Home_slider_1.css"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Navigation, Autoplay } from "swiper";
import { BsArrowRightShort } from "react-icons/bs";


function Home_slider_1() {
    return (
        <div className='container-fluid '>
            <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-12 p-0">
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            //   }}
                            navigation={true}
                            Navigation={true}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper jssjfh"
                        >
                            <SwiperSlide className="" >
                                <div className="sldd d-flex justify-content-center align-items-center">
                                    <div className="headind_uper_layer">
                                        <h2 class="heading_1 text-white text-center">Be <span className="part">Part of Something </span> <br />Revolutionary</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="sldd_2 d-flex justify-content-center align-items-center">
                                    <div className="headind_uper_layer">
                                        <h2 class="heading_2 text-white text-center"> <span className="part">By</span> ArchieToken</h2>
                                        <div className="button_group_layer mt-4">
                                            <button className="btn rounded-0 m-auto py-4 px-lg-4 soon_buton">COMMING SOON <BsArrowRightShort className="arrow ms-2"/> </button>
                                            <button className="btn rounded-0 m-auto py-4 px-lg-4  mt-3 mt-md-0 ms-md-4 soon_buton">COMMING SOON <BsArrowRightShort className="arrow ms-2"/> </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="sldd_3 d-flex justify-content-center align-items-center">
                                    <div className="headind_uper_layer">
                                        <h2 class="heading_2 text-white text-center"> <span className="part">By</span> NFT</h2>
                                        <div className="button_group_layer mt-4">
                                            <button className="btn rounded-0 m-auto py-4 px-lg-4 soon_buton">Archieneko NFT <BsArrowRightShort className="arrow ms-2"/> </button>
                                            <button className="btn rounded-0 m-auto py-4 px-lg-4  mt-3 mt-md-0 ms-md-4 soon_buton">ArchieMeta NFT <BsArrowRightShort className="arrow ms-2"/> </button>
                                            <div className="thrd_button text-center mt-3">
                                            <button className="btn rounded-0 m-auto py-4 px-lg-4 soon_buton">We Care Kitty NFT <BsArrowRightShort className="arrow ms-2"/> </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Home_slider_1
