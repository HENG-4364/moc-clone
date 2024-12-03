"use client";

import * as React from "react";
import { Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Title } from "@/components/Title/Title";

interface Announcement {
  id: number;
  content: string;
  date: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    content:
      "តម្លៃប្រេងឥន្ធនៈនៅរាជធានីភ្នំពេញ ចាប់ពីថ្ងៃទី១៦ ដល់ថ្ងៃទី ៣១ ខែ មករា ឆ្នាំ២០២៣",
    date: "២០២៤-០១-១៥",
  },
  {
    id: 2,
    content:
      "សេចក្តីជូនដំណឹងស្តីពីការដាក់ឱ្យដំណើរការប្រព័ន្ធចុះបញ្ជីពាណិជ្ជកម្មតាមប្រព័ន្ធស្វ័យប្រវត្តិកម្ម",
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
  {
    id: 5,
    content: "សេចក្តីជូនដំណឹងស្តីពីការបិទសេវាកម្មក្នុងថ្ងៃឈប់សម្រាក",
    date: "២០២៤-០១-១១",
  },
];

export function Announcement() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="container mx-auto px-4 space-y-8">
      <Title title={"សេចក្តីជូនដំណឹង"} />
      <div className="w-full mx-auto">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {announcements.map((announcement) => (
              <CarouselItem key={announcement.id}>
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
                        {announcement.content}
                      </p>
                      <p
                        className="text-sm opacity-80 mt-1"
                        style={{
                          fontFamily: "Khmer OS Siemreap, Arial, sans-serif",
                        }}
                      >
                        {announcement.date}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2 mt-4">
          {announcements.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-[#2980b9]" : "bg-gray-300"
              }`}
              // style={{
              //   background: `${index === current ? "#2980b9" : "gray"}`,
              // }}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
