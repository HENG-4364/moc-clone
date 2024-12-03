import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { useParams } from "next/navigation";
import style from "./swiper_automation_list.module.scss";
import { Container } from "react-bootstrap";
import AutomationListCard from "./AutomationCard/AutomationListCard";

const automationServices = [
  {
    title: "ចុះបញ្ជីពាណិជ្ជកម្ម",
    link: "https://www.businessregistration.moc.gov.kh",
    icon: "flaticon-seo",
    color: "bg-b5a2f8",
    image: "/bs2.png",
  },
  {
    title: "អាជ្ញាប័ណ្ណពាណិជ្ជកម្មអេឡិចត្រូនិក",
    link: "https://ecommercelicensing.moc.gov.kh",
    icon: "flaticon-laptop",
    color: "bg-e80d82",
    image: "/bs3.png",
  },
  {
    title: "កម្មសិទ្ធិបញ្ញា",
    link: "https://cambodiaip.gov.kh",
    icon: "flaticon-analysis-1",
    color: "bg-1db294",
    image: "/bs1.png",
  },
  {
    title: "ប្រតិបត្តិការដែលមានកិច្ចធានា",
    link: "http://www.setfo.gov.kh",
    icon: "flaticon-seo",
    color: "bg-f27e19",
    image: "/bs4.png",
  },
  {
    title: "វិញ្ញាបនបត្របញ្ជាក់ដើមកំណើតទំនិញ",
    link: "https://co.moc.gov.kh",
    icon: "flaticon-analysis-1",
    color: "bg-e74c3c",
    image: "/bs5.png",
  },
];

const automationServicesEn = [
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
type CustomCSSProperties = React.CSSProperties & {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-buttom"?: string;
};

export default function SwiperAutomationList() {
  const params = useParams<{ lang: string }>();

  const currentLang = params?.lang || "en-US";
  return (
    <div className="features-area">
      <header
        className={`d-md-flex ${style.headerContainer}`}
        style={{
          background: `url(${"/bg-dark.png"}) no-repeat`,
          height: "339px",
        }}
      >
        <Container>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            slidesPerView={4}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            style={
              {
                "--swiper-pagination-color": "#FFFFFF",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
              } as CustomCSSProperties
            }
          >
            {currentLang === "kh" ? (
              <>
                {automationServices.map((item: any, key: number) => {
                  return (
                    <SwiperSlide key={key}>
                      <AutomationListCard
                        key={key}
                        title={item.title}
                        link={item.link}
                        icon={item.icon}
                        image={item.image}
                      />
                    </SwiperSlide>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {automationServicesEn.map((item: any, key: number) => {
                  return (
                    <SwiperSlide key={key}>
                      <AutomationListCard
                        key={key}
                        title={item.title}
                        link={item.link}
                        icon={item.icon}
                        image={item.image}
                      />
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </Container>
      </header>
    </div>
  );
}
