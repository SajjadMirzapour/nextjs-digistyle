'use client'

import { Autoplay, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";

function WomenBackgroundImages({data}) {
    return ( 
        <div className="w-full md:pt-40 pt-10">
            <Swiper
                modules={[Autoplay, EffectFade, A11y]}
                speed={900}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                effect={'fade'}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
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
     );
}

export default WomenBackgroundImages;