import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import banner from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpeg'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      {/* Banner */}
      <div className="hero h-[350px] md;h-[320px]"
      style={{
        backgroundImage: `url(${banner4})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hungry Naki!</h1>
            <p className="mb-5">
            Hungry Naki is on a thrilling quest to satisfy an endless appetite for food and adventure. With every bite and bold choice, life becomes a flavorful journey full of surprises and excitement.
          </p>
            <Link to={'/all-foods'} className="btn btn-error text-white">Get Started</Link>
          </div>
        </div>
      </div>
      {/* swiper */}
      <Swiper
      className="my-5"
      spaceBetween={20}
      modules={[Navigation, Autoplay]}
      slidesPerView={1} // Default for small screens
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide><img className='h-[250px]' src={banner} alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-[250px]' src={banner2} alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-[250px]' src={banner3} alt="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;