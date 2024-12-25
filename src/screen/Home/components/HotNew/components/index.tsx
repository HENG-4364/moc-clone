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
import { Title } from "@/components/Title/Title";

const slides = [
  {
    id: 1,
    content:
      "តម្លៃប្រេងឥន្ធនៈនៅរាជធានីភ្នំពេញ ចាប់ពីថ្ងៃទី១៦ ដល់ថ្ងៃទី ៣១ ខែ មករា ឆ្នាំ២០២៣",
    date: "២០២៤-០១-១៥",
  },
  {
    id: 2,
    content:
      "សេចក្តីជូនដំណឹងស្តីពីការបិទសេវាកម្មក្នុងថ្ងៃឈប់សម្រាក",
    date: "២០២៤-០១-១៤",
  },
  {
    id: 3,
    content:
      "សេចក្តីជូនដំណឹងស្តីពីការផ្អាកការផ្តល់សេវាសាធារណៈក្នុងឱកាសបុណ្យចូលឆ្នាំថ្មី",
    date: "២០២៤-០១-១៣",
  },
  {
    id: 4,
    content: "សេចក្តីជូនដំណឹងស្តីពីការកែសម្រួលតម្លៃសេវាសាធារណៈ",
    date: "២០២៤-០១-១២",
  },
];

export default function AnnouncementSwiper() {
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
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card className="bg-[#2980b9] text-white border-none">
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex-shrink-0 ">
                      <Bell
                        className="w-10 h-10 "
                        style={{
                          border: "2px dotted white",
                          borderRadius: "100%",
                          padding: "5px",
                        }}
                      />
                    </div>
                    <div className="flex-grow">
                      <p
                        className="text-base md:text-lg"
                        style={{
                          fontFamily: "Khmer OS Siemreap, Arial, sans-serif",
                        }}
                      >
                        {slide?.content}
                      </p>
                      <p
                        className="text-sm opacity-80 mt-1"
                        style={{
                          fontFamily: "Khmer OS Siemreap, Arial, sans-serif",
                        }}
                      >
                        {slide?.date}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
}
