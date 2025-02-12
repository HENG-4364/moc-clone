"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function JoinSection({ dict }: { dict: any }) {
  const router = useRouter();

  return (
    <div className="bg-blue-900 py-12">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-white">
          <p className="text-blue-200">ចូលរួមជាដៃគូរអាជីវកម្ម!</p>
          <h2 className="mb-6 text-3xl font-bold">
            ទទួលបានអត្ថប្រយោជន៍បន្ថែម និងផ្សព្វផ្សាយអាជីវកម្មរបស់អ្នក។
          </h2>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push("/business-directory/login")}
            >
              ចូលគណនី
            </Button>
            <Button
              size="lg"
              onClick={() => router.push("/business-directory/sign-up")}
            >
              ចុះឈ្មោះឥឡូវនេះ
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-full w-full"
          >
            {[1, 2, 3].map((i) => (
              <SwiperSlide key={i}>
                <Card className="aspect-video w-full">
                  <div className="h-full w-full bg-gray-200" />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
