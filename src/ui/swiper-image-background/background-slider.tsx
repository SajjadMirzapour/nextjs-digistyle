'use client'

import { Autoplay, Navigation, A11y, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";

function BackgroundSlider({ data, mobileDta }) {

    return (
        <div>
            <div className="md:block hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination, Navigation, A11y]}
                    speed={900}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    effect={'fade'}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                // navigation={{
                //     disabledClass: "invisible",
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev",
                // }}
                >
                    {data.map((el, index) =>
                        <SwiperSlide key={index}>
                            <Image
                                className="w-[100%] h-auto"
                                sizes="100vw"
                                width={0}
                                height={0}
                                src={el.src}
                                alt={el.alt}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="md:hidden w-full block mt-5 mb-10">
                <Swiper
                    modules={[Autoplay, A11y, Pagination]}
                    speed={900}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    // slidesPerView={1}
                    // spaceBetween={10}
                    slidesPerView={1.25}
                    centeredSlides={true}
                    spaceBetween={30}
                    // grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        mobileDta.map((el, index) =>
                            <SwiperSlide key={index}>
                                <Image
                                    className="w-full h-auto rounded-md"
                                    width={400}
                                    height={200}
                                    src={el.src}
                                    alt={el.alt}
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default BackgroundSlider;