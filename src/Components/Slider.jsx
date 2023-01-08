import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Slider = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to-white h-96 bg-blue-400 left-0 w-full z-0 '>
       <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img
                        className="object-fill w-auto items-center h-96"></img>
                <div class="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                          <h5 class="mb-2 flex-auto text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RWS-Solutions Card 1</h5>
                    </a>
                          <p class="mb-3 flex-auto text-xs font-normal md:text-base md:font-normal text-gray-700 dark:text-gray-400">Morbi at vehicula quam. Ut facilisis dolor at magna elementum, vel aliquet ligula imperdiet.</p>
</              div>
                
                </SwiperSlide>
                <SwiperSlide><img
                        className="object-fill w-auto items-center h-96"></img>
                <div class="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                          <h5 class="mb-2 flex-auto text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RWS-Solutions Card 2</h5>
                    </a>
                          <p class="mb-3 flex-auto text-xs font-normal md:text-base md:font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat, ligula sed bibendum tincidunt, enim elit congue nisl, vel interdum tortor nisi a turpis.</p>
</              div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-auto items-center h-96"></img>
                        <div class="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                          <h5 class="mb-2 flex-auto text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RWS-Solutions Card 3</h5>
                    </a>
                          <p class="mb-3 flex-auto text-xs font-normal md:text-base md:font-normal text-gray-700 dark:text-gray-400">Nam et aliquam massa. Quisque vulputate, nunc sed semper scelerisque, dolor odio tincidunt tellus</p>
</              div>
                    
                </SwiperSlide>
            </Swiper>
        </>
    </div>
  )
}

export default Slider