import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import Service from "./Service";
import Contact from "./Contact";
import "./styles.css"; // Import custom CSS

const Home = ({ images }) => {
  return (
    <>
      <div className="bg-black text-white flex flex-col h-screen justify-center items-center text-center gap-16">
        <div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            We Work On Ideas to Make Them Real, <br />
            <span className="text-lime-400">
              Standout <span className="text-white">from Others</span>
            </span>
          </h1>

          {/* Hire Me Button */}
          <button className="mt-6 bg-lime-400 px-8 py-2 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
           <a href="#contact"> Hire Me </a>
          </button>
        </div>

        {/* Swiper Image Section */}
        <div className="image-slider-container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}  /* Increased spacing between images */
            freeMode={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, FreeMode]}
            className="custom-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="custom-slide">
                <div className="image-wrapper">
                  <img
                    src={img.src}
                    alt={`Image ${index + 1}`}
                    className="image-style"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Service />
      <Contact />
    </>
  );
};

export default Home;
