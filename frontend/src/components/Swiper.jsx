import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/images/banner1.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner2.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner3.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner4.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner5.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner6.png"
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] lg:h-[430px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
