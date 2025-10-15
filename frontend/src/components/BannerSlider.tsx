"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[400px] md:h-[600px]"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Living Room"
            rel="preload"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-3xl font-bold">Explore Modern Living</h2>
            <p className="mt-2">
              Discover our latest collection of modern furniture.
            </p>
            <Link href="/products">
              <button
                className="
      mt-4
      px-8 py-3
      bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400
      text-white font-semibold
      rounded-2xl
      shadow-lg
      hover:shadow-2xl
      transform hover:-translate-y-1 hover:scale-105
      transition-all duration-300
      focus:outline-none focus:ring-4 focus:ring-emerald-300
      rounded-full
    "
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1721523262341-3dcd41e25128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8"
            alt="Cozy Bedroom"
            rel="preload"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-3xl font-bold">Comfortable Bedrooms</h2>
            <p className="mt-2">Make your bedroom cozy and stylish.</p>
            {/* <Link href="/products">
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full">
                Shop Now
              </button>
            </Link> */}
            <Link href="/products">
              <button
                className="
      mt-4
      px-8 py-3
      bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400
      text-white font-semibold
      rounded-2xl
      shadow-lg
      hover:shadow-2xl
      transform hover:-translate-y-1 hover:scale-105
      transition-all duration-300
      focus:outline-none focus:ring-4 focus:ring-emerald-300
      rounded-full
    "
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
