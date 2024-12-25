"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Bell, Globe, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import style from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import KeyEconomicIndicatorsCard from "../KeyEconomicIndicatorsCard/KeyEconomicIndicatorsCard";

const slides = [
  {
    title: "តម្លៃប្រេងសាំង",
    link: "https://www.businessregistration.moc.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/sang.png",
    name: "តម្លៃ",
  },
  {
    title: "សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់",
    link: "https://ecommercelicensing.moc.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/statistic.png",
    name: "0.46%",
  },
  {
    title: "ទំនិញនាំចេញ-នាំចូល",
    link: "https://cambodiaip.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/export-goods.png",
    name: "នាំចូល",
  },
  {
    title: "ទំនិញសក្ដានុពល",
    link: "http://www.setfo.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/cashew.png",
    name: "នាំចេញ",
  },
];

export default function KeyEconomicIndicatorsSwiper() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mx-auto">
      <div className={` ${style.sliderWrapper}`}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            450: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          slidesPerView={4}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "50px" }}
        >
          {slides.map((slide) => (
            <SwiperSlide>
              <KeyEconomicIndicatorsCard
                title={slide?.title}
                image={slide?.image}
                date={slide?.date}
                name={slide?.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
