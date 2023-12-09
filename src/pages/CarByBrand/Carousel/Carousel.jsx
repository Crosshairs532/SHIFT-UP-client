/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'

const Carousel = ({ images, Bname }) => {
    console.log(images);
    const { brand_image1, brand_image2, brand_image3 } = images[0];
    console.log(brand_image1);
    console.log(brand_image2);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide>
                    <div className=' outline-2 relative gradient'>
                        <div> <h1 className=' absolute text-3xl md:text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-tr from-white to-black top-[40%] font-bold font-oxanium left-[10%]'>{Bname}</h1>
                            <p className=' text-xl lg:text-5xl text-slate-300 absolute top-[50%] font-bold font-oxanium left-[10%]'> Start New Journey with us</p></div>
                        <img className=' w-[100%]' src={brand_image1} alt="" /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' outline-2 relative gradient'>
                        <div>
                            <h1 className='  absolute text-3xl md:text-4xl lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-tr from-white to-black top-[40%] font-bold font-oxanium left-[10%]'>{Bname}</h1>
                            <p className=' text-xl lg:text-5xl text-slate-300 absolute top-[50%] font-bold font-oxanium left-[10%]'> Most Unique Collection</p>
                        </div>
                        <img className=' w-[100%]' src={brand_image2} alt="" />
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className=' outline-2 relative gradient'>
                        <div>
                            <h1 className='  absolute text-3xl md:text-4xl lg:text-7xl  bg-clip-text text-transparent  bg-gradient-to-tr from-white to-black-200 top-[40%] font-bold font-oxanium left-[10%]' >{Bname}</h1>
                            <p className=' text-xl lg:text-5xl text-slate-300 absolute top-[50%] font-bold font-oxanium left-[10%]'> Greater Servicing </p>
                        </div>
                        <img className=' w-[100%]' src={brand_image3} alt="" />
                    </div>
                </SwiperSlide>

                ...
            </Swiper>

        </div>



    );
};

export default Carousel;


