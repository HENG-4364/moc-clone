"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChartIcon as ChartBar,
  ClipboardList,
  FileSpreadsheet,
  PresentationIcon as PresentationChart,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Title } from "@/components/Title/Title";
import React from "react";
import AutomationCard from "./AutomationCard/AutomationCard.";

export default function Automation() {
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
    {
      title: "CO Automation",
      link: "https://co.moc.gov.kh",
      icon: "flaticon-analysis-1",
      color: "bg-e74c3c",
      image: "/bs5.png",
    },
  ];

  return (
    <div>
      <Title title={"សេវាកម្មស្វ័យប្រវត្តកម្ម"} />
      <div
        className=" bg-[#2196F3] bg-opacity-90 p-6 flex items-center"
        style={{
          background: `url(${"/bg-dark.png"}) no-repeat`,
          height: "339px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
                  <AutomationCard
                    image={card?.image}
                    color={card?.color}
                    link=""
                    title={card?.title}
                  />
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
    </div>
  );
}
