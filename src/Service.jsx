import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "./Service.css"; // Import custom CSS

function Service() {
  const videos = [
    "/eshan_sample.mp4",
    "/reel.mp4",
    "/main.mp4",
    "/main_v.mp4",
    "/fianl.mp4",
    "/eshan_sample.mp4",
    "/reel.mp4",
    "/main.mp4",
  ];

  const images = [
    { src: "/thumbone.jpg" },
    { src: "/thumbtwo.jpg" },
    { src: "/thumbthree.png" },
    { src: "/thumbfour.jpg"}, 
    { src: "/five.jpg"}, 
    { src: "/six.jpg"}, 
    { src: "/seven.jpg"}, 
    { src: "/eight.png"}, 
    { src: "/nine.png"}, 
    { src: "/ten.png"}, 
  ];

  return (
    <div id="service" className="service-container">
      {/* Title */}
      <h1 className="service-title">Services</h1>

      {/* Video Section */}
      <Swiper
        spaceBetween={40} /* More space between items */
        slidesPerView={2.5} // Show around 2.5 videos at a time
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        speed={2500}
        modules={[Autoplay]}
        className="custom-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="video-slide">
            <motion.div whileHover={{ scale: 1.05 }} className="video-wrapper">
              <video className="video-player" loop muted autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Space below videos */}
      <div className="spacer-video"></div>

      {/* Image Section */}
      <Swiper
        spaceBetween={40} /* More space between items */
        slidesPerView={3} // Show around 3 images at a time
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={3000}
        modules={[Autoplay]}
        className="custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="image-slide">
            <motion.div whileHover={{ scale: 1.05 }} className="image-wrapper">
              <img src={img.src} alt={`Image ${index + 1}`} className="image" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Service;
