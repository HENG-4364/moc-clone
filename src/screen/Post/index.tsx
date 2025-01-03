"use client";

import { Title } from "@/components/Title/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";
export const highPotentialProductsVerticalTabs = [
  { id: 1, label: "គ្រាប់ស្វាយចន្ទី", value: "cashew" },
  { id: 2, label: "ដំឡូងមី", value: "cassava" },
  { id: 3, label: "មៀនប៉ៃលិន", value: "pailinLongan" },
  { id: 4, label: "ស្រូវ អង្ករ", value: "rice" },
  { id: 5, label: "ម្រេច", value: "pepper" },
];
const newsTypes = [
  {
    id: "all",
    label: "ក.ព័ត៌មានមូលដ្ឋាន",
  },
  {
    id: "agreement",
    label: "ខ.តម្រូវការទីផ្សារ",
  },
  {
    id: "general-information",
    label: "គ.អត្រាពន្ធគយ",
  },
  {
    id: "message",
    label: "ឃ.ចំណុចខ្លាំង ឱកាស និងអនុសាសន៍",
  },
];
const HighPotentialProductsScreen: React.FC = () => {
  const [horizontalTab, setHorizontalTab] = useState("all");
  const [verticalTab, setVerticalTab] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

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

  const setVertical = (verticalTab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("verticalTab", verticalTab);
    push(`${window.location.origin}/${pathname}?${params}`);
    setHorizontalTab("all");
  };
  const setHorizontal = (horizontalTab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("horizontalTab", horizontalTab);
    push(`${window.location.origin}/${pathname}?${params}`);
  };
  return (
    <section className="bg-[#f6f7f8]">
      <div className="container mx-auto px-4 pb-12">
        <Title title="មុខទំនិញសក្ដានុពលខ្ពស់" />
        <div className="lg:grid grid-cols-11 gap-6 hidden">
          {/* Sidebar */}
          <div className="col-span-3 bg-white shadow-md">
            <div className="w-full shadow-sm">
              <div ref={scrollContainerRef} className="p-2 rounded-md w-full ">
                {highPotentialProductsVerticalTabs.map((type) => (
                  <div
                    key={type.id}
                    className={cn(
                      "px-4 py-3 rounded-sm  cursor-pointer my-1",
                      "hover:bg-gray-50",
                      verticalTab === type.id
                        ? "bg-gradient-to-b from-[#2980B9] to-[#286e9d] text-white"
                        : "after:bg-transparent border border-gray-100"
                    )}
                    onClick={() => (
                      setVerticalTab(type.id), setVertical(type.id)
                    )}
                  >
                    {type.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-8 bg-white shadow-md">
            <div className="w-full shadow-sm">
              <div
                ref={scrollContainerRef}
                className="flex justify-between p-2 scrollbar-hide rounded-md w-full"
              >
                {newsTypes.map((type) => (
                  <button
                    key={type.id}
                    className={cn(
                      "px-4 py-2 rounded-md transition-all duration-200 font-semibold text-[15px] xl:text-[16px]",
                      "hover:bg-gray-50",
                      "relative",
                      "after:absolute after:bottom-0 after:left-0 after:right-0",
                      "after:h-[2px] after:rounded-full",
                      horizontalTab === type.id
                        ? "after:bg-gradient-to-r after:from-[#2980B9] after:to-[#21638f]"
                        : "after:bg-transparent"
                    )}
                    onClick={() => (
                      setHorizontalTab(type.id), setHorizontal(type.id)
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighPotentialProductsScreen;
