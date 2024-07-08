import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = ({ name, images }) => {
  return (
    <div className="max-w-3xl mx-auto relative">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center py-3 text-shadow">
        {name}
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="py-8 relative h-fit"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image} className="w-auto h-auto relative">
              <img
                src={image}
                alt="slide_image"
                className="w-64 h-96 object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

ImageSlider.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ImageSlider;
