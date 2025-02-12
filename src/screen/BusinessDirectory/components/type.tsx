"use client";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TypeOfBusinessCardPlaceholder from "./components/t1";
import TypeOfBusinessCard from "./components/t2";

type TypeOfBusinessProps = {
  dict?: any;
  data?: any;
  loading?: boolean;
};

export default function TypeOfBusiness({ data, loading }: TypeOfBusinessProps) {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

  return (
    <div className="container pb-1 -translate-y-16 relative z-10">
      {loading || !data ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <TypeOfBusinessCardPlaceholder key={index} />
          ))}
        </div>
      ) : (
        <div className="relative flex items-center">
          <button className="swiper-custom-left-arrow shadow-lg text-black bg-white p-2 rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
            <ChevronLeft size={30} />
          </button>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              450: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-custom-right-arrow",
              prevEl: ".swiper-custom-left-arrow",
            }}
          >
            {data?.map((item: any) => (
              <SwiperSlide key={item.id} className="cursor-pointer h-full pb-2">
                <TypeOfBusinessCard
                  cardTitle={lang === "kh" ? item.name_kh : item.name_en}
                  id={item.id}
                  thumbnail={item.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-custom-right-arrow shadow-lg text-black bg-white p-2 rounded-full absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
