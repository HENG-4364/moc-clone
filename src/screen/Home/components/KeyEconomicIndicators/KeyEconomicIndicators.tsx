"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Title } from "@/components/Title/Title";
import React from "react";
import KeyEconomicIndicatorsCard from "./KeyEconomicIndicatorsCard/KeyEconomicIndicatorsCard";

export default function KeyEconomicIndicators() {
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

  const cards = [
    {
      title: "Business Registration",
      link: "https://www.businessregistration.moc.gov.kh",
      icon: "flaticon-seo",
      color: "bg-b5a2f8",
      image: "/bs2.png",
    },
    {
      title: "Business license",
      link: "https://ecommercelicensing.moc.gov.kh",
      icon: "flaticon-laptop",
      color: "bg-e80d82",
      image: "/bs3.png",
    },
    {
      title: "Intellectual Property",
      link: "https://cambodiaip.gov.kh",
      icon: "flaticon-analysis-1",
      color: "bg-1db294",
      image: "/bs1.png",
    },
    {
      title: "Secured Transactions Filing Office",
      link: "http://www.setfo.gov.kh",
      icon: "flaticon-seo",
      color: "bg-f27e19",
      image: "/bs4.png",
    },
  ];

  return (
    <div>
      <Title title={"សូចនាករសេដ្ឋកិច្ច"} />

      <div className="container mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <KeyEconomicIndicatorsCard image={""} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
