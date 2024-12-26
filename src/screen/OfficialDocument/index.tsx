"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScrollText,
  Search,
  Image,
  Ship,
  Scale,
  ClipboardCheck,
  FileText,
  FileCheck,
  FileClock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DocumentSearch } from "./components/DocumentSearch/DocumentSearch";
import { DocumentFilters } from "./components/DocumentFilter/DocumentFilter";
import { FeaturedDocuments } from "./components/DocumentFeature/DocumentFeature";
import { Title } from "@/components/Title/Title";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { OfficialDocumentPagination } from "./components/Pagionation/Pagination";
import { PdfCard } from "./components/DocumentCard/DocumentCard";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const documentTypes = [
  {
    id: "all",
    label: "ទាំងអស់",
  },
  {
    id: "decree",
    label: "អនុក្រឹត្យ",
  },
  {
    id: "announcement",
    label: "ប្រកាស",
  },
  {
    id: "business-law",
    label: "ច្បាប់ពាក់ព័ន្ធវិស័យពាណិជ្ជកម្ម",
  },
  {
    id: "agreement",
    label: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
  },
  {
    id: "budget-management-of-the-ministry-of-commerce",
    label: "ការគ្រប់គ្រងថវិការបស់ក្រសួងពាណិជ្ជកម្ម",
  },
  {
    id: "notice",
    label: "សេចក្តីជូនដំណឹង",
  },
  {
    id: "policy",
    label: "គោលនយោបាយ",
  },
  {
    id: "clv-dta",
    label: "ឯកសារពាក់ព័ន្ធនឹងតំបន់ CLV DTA",
  },
  {
    id: "wto-file",
    label: "ឯកសារពាក់ព័ន្ធ WTO",
  },
];

// const documents = [
//   {
//     id: 1,
//     icon: Search,
//     title: "សេចក្តីជូនដំណឹង",
//     description: "ស្វែងរកឯកសារផ្លូវការ និងសេចក្តីជូនដំណឹងផ្សេងៗ",
//     color: "bg-blue-500/10 text-blue-500",
//     count: 25,
//   },
//   {
//     id: 2,
//     icon: Image,
//     title: "ប្រកាស",
//     description: "ប្រកាសព័ត៌មាន និងការផ្សព្វផ្សាយផ្សេងៗ",
//     color: "bg-purple-500/10 text-purple-500",
//     count: 18,
//   },
//   {
//     id: 3,
//     icon: Ship,
//     title: "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
//     description: "ឯកសារពាក់ព័ន្ធនឹងការដឹកជញ្ជូន និងឡូជីស្ទីក",
//     color: "bg-green-500/10 text-green-500",
//     count: 32,
//   },
//   {
//     id: 4,
//     icon: ScrollText,
//     title: "អនុក្រឹត្យ",
//     description: "អនុក្រឹត្យ និងឯកសារផ្លូវការផ្សេងៗ",
//     color: "bg-red-500/10 text-red-500",
//     count: 15,
//   },
//   {
//     id: 5,
//     icon: Scale,
//     title: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
//     description: "កិច្ចព្រមព្រៀង និងឯកសារពាណិជ្ជកម្មផ្សេងៗ",
//     color: "bg-amber-500/10 text-amber-500",
//     count: 28,
//   },
//   {
//     id: 6,
//     icon: ClipboardCheck,
//     title: "គោលការណ៍ណែនាំ",
//     description: "គោលការណ៍ណែនាំ និងបទបញ្ជាផ្សេងៗ",
//     color: "bg-teal-500/10 text-teal-500",
//     count: 22,
//   },
// ];
const documents = [
  {
    title: "Cambodia and WTO-Year 2004-KH-Eng",
    date: "០១-កក្កដា-២០២៤",
    time: "២៣:០០:០០ PM",
    fileSize: "1.2MB",
  },
  {
    title: "CAMBODIA'S 20-YEAR JOURNEY AS A WTO MEMBER-KH-ENG_FINAL",
    date: "០១-កក្កដា-២០២៤",
    time: "០១:០០:០០ PM",
    fileSize: "3.5MB",
  },
  {
    title: "អនុក្រឹត្យលេខ ២៩៨ អនក្រ.បក ចុះថ្ងៃទី ១៣ ខែ កក្កដា ឆ្នាំ២០២៤",
    date: "០២-កក្កដា-២០២៤",
    time: "០២:០០:២០ PM",
    fileSize: "2.8MB",
  },
  {
    title: "សារាចរណែនាំស្តីពីការអនុវត្ត សេចក្តីសម្រេច ហត្ថ នៃយន្តការ CLV-DTA",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "1.8MB",
  },
  {
    title:
      "ប្រកាសអន្តរក្រសួងទីផ្សារមូលបត្រ សេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ហត្ថ នៃយន្តការ",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "4.2MB",
  },
];
const stats = [
  {
    icon: FileText,
    label: "ឯកសារសរុប",
    value: "១៤០",
    color: "text-blue-500",
  },
  {
    icon: FileCheck,
    label: "បានបញ្ចប់",
    value: "៩៥",
    color: "text-green-500",
  },
  {
    icon: FileClock,
    label: "កំពុងដំណើរការ",
    value: "៤៥",
    color: "text-amber-500",
  },
];

const categories = [
  "ទាំងអស់",
  "អនុក្រឹត្យ",
  "ប្រកាស",
  "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
  "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
  "គោលការណ៍ណែនាំ",
  "សេចក្តីជូនដំណឹង",
  "សេចក្តីណែនាំ",
  "គោលនយោបាយ",
  "បទបញ្ជា",
];

export function OfficialDocumentScreen() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const select = searchParams.get("select");
  const page = searchParams.get("page");
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();

  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateArrows);
      updateArrows();

      return () => scrollContainer.removeEventListener("scroll", updateArrows);
    }
  }, []);
  const setSelect = (select: any, page?: any) => {
    if (select && page) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page);
      params.set("select", select);
      push(`${window.location.origin}/${pathname}?${params}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("select", select);
      push(`${window.location.origin}/${pathname}?${params}`);
    }
  };
  return (
    <>
      <div className="bg-[#f6f7f8]">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-3">
            <Title title={"ឯកសារផ្លូវការ"} />

            {/* Stats */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className={`${stat.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div> */}

            {/* Search */}
            <DocumentSearch />
          </div>

          {/* Featured Documents */}
          {/* <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">ឯកសារថ្មីៗ</h2>
              <DocumentFilters />
            </div>
            <FeaturedDocuments />
          </div> */}
          <div className="relative">
            {/* Left Arrow */}
            {/* {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-l-lg bg-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )} */}

            {/* Scrollable Area */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto whitespace-nowrap  p-2 space-x-4 scrollbar-hide rounded-md"
              style={{}}
            >
              {documentTypes.map((type) => (
                <button
                  key={type.id}
                  className={`rounded-md ${
                    activeCategory === type.id
                      ? "bg-gradient-to-b from-[#2980B9] to-[#24648f] text-white"
                      : "bg-gray-200"
                  } px-2 py-2 text-sm`}
                  onClick={() => (
                    setActiveCategory(type.id), setSelect(type.id, "1")
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            {/* {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-r-lg bg-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )} */}
          </div>

          <div className="flex justify-end gap-2 mt-2 mb-5">
            <button
              className={`p-2 rounded-full shadow-md ${
                !showLeftArrow
                  ? "bg-gray-50 hover:bg-gray-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => scroll("left")}
            >
              <ChevronLeft
                className={` ${!showLeftArrow ? "text-gray-400" : ""}`}
              />
            </button>
            <button
              className={`p-2 rounded-full shadow-md ${
                !showRightArrow
                  ? "bg-gray-50 hover:bg-gray-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => scroll("right")}
            >
              <ChevronRight
                className={` ${!showRightArrow ? "text-gray-400" : ""}`}
              />
            </button>
          </div>
          {/* Document Categories */}
          {/* <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 hidden">
              {documentTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id}>
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent
              value="all"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {documents.map((doc) => {
                const Icon = doc.icon;
                return (
                  <Card
                    key={doc.id}
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${doc.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {doc.count} ឯកសារ
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {doc.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs> */}
          {activeCategory === "all" && (
            // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            //   {documents.map((doc) => {
            //     const Icon = doc.icon;
            //     return (
            //       <Card
            //         key={doc.id}
            //         className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md"
            //       >
            //         <CardContent className="p-6">
            //           <div className="flex justify-between items-start mb-4">
            //             <div
            //               className={`w-12 h-12 rounded-xl ${doc.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            //             >
            //               <Icon className="w-6 h-6" />
            //             </div>
            //             <span className="text-sm text-muted-foreground">
            //               {doc.count} ឯកសារ
            //             </span>
            //           </div>
            //           <h3 className="text-xl font-semibold mb-2">
            //             {doc.title}
            //           </h3>
            //           <p className="text-muted-foreground text-sm">
            //             {doc.description}
            //           </p>
            //         </CardContent>
            //       </Card>
            //     );
            //   })}
            // </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc, index) => (
                <PdfCard key={index} {...doc} />
              ))}
            </div>
          )}
          <div className="flex justify-end ">
            <div className="w-full mt-5">
              <OfficialDocumentPagination
                currentPage={Number(page)}
                total={80}
                size={10}
                limit={9}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
