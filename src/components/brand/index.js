import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./index.module.scss"
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Brand() {
    return (
        <>
            <div className={style.backgroud}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },
                      }}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper brand" >
                    <SwiperSlide className={style.Swiper}><img src="https://qph.cf2.quoracdn.net/main-qimg-9f9d4e29bcb41169802c193e05d3fef8" alt="brand"></img></SwiperSlide>
                    <SwiperSlide className={style.Swiper}><img src="https://prod.cloud.rockstargames.com/crews/sc/5398/51758007/publish/emblem/emblem_256.png" alt="brand"></img></SwiperSlide>
                    <SwiperSlide className={style.Swiper}><img src="https://fmcg-viet.com/wp-content/uploads/2021/02/brand-axe-logo.png" alt="brand"></img></SwiperSlide>
                    <SwiperSlide className={style.Swiper}><img src="https://dxf1.com/images/jdownloads/screenshots/dove-02.png" alt="brand"></img></SwiperSlide>
                    <SwiperSlide className={style.Swiper}><img src="https://qph.cf2.quoracdn.net/main-qimg-9f9d4e29bcb41169802c193e05d3fef8" alt="brand"></img></SwiperSlide>
                    <SwiperSlide className={style.Swiper}><img src="https://prod.cloud.rockstargames.com/crews/sc/5398/51758007/publish/emblem/emblem_256.png" alt="brand"></img></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}