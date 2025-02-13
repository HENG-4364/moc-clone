"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperCard from "./components/swiper";

export function JoinSection({ dict }: { dict: any }) {
  const router = useRouter();

  return (
    <>
      <div className="bg-primary text-white py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-5 ">
            <div className="col-span-1 xl:col-span-2 mb-8 xl:mb-0">
              <p className="text-blue-200 mb-2">ចូលរួមជាដៃគូរអាជីវកម្ម!</p>
              <h2 className="text-3xl font-bold mb-4">
                ទទួលបានអត្ថប្រយោជន៍បន្ថែម និងផ្សព្វផ្សាយអាជីវកម្មរបស់អ្នក។
              </h2>
              <div className="space-x-4">
                <Button
                  className="bg-white text-black hover:bg-white"
                  onClick={() => router.push("/business-directory/login")}
                >
                  ចូលគណនី
                </Button>
                <Button
                  className="border"
                  onClick={() => router.push("/business-directory/sign-up")}
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Button>
              </div>
            </div>
            <div className="col-span-1 xl:col-span-3">
              <SwiperCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
