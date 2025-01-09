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
import CashewTab from "./Components/CashewTab";
import { parseAsString, useQueryState } from "nuqs";
import RiceTab from "./Components/Ricetab";
import CassavaTab from "./Components/CassavaTab";
import PailinLonganTab from "./Components/PailinLonganTab";
export const highPotentialProductsVerticalTabs = [
  { id: 1, label: "គ្រាប់ស្វាយចន្ទី", value: "cashew" },
  { id: 2, label: "ដំឡូងមី", value: "cassava" },
  { id: 3, label: "មៀនប៉ៃលិន", value: "pailinLongan" },
  { id: 4, label: "ស្រូវ អង្ករ", value: "rice" },
  { id: 5, label: "ម្រេច", value: "pepper" },
];
const HighPotentialProductsScreen = ({ dict }: any) => {
  // const [horizontalTab, setHorizontalTab] = useState("");
  // const [verticalTab, setVerticalTab] = useState("cashew");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const [verticalTab, setVerticalTab] = useQueryState(
    "verticalTab",
    parseAsString.withDefault("cashew")
  );
  const [, setHorizontalTab] = useQueryState(
    "horizontalTab",
    parseAsString.withDefault("basicInformation")
  );

  const setVertical = (verticalTab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    setVerticalTab(verticalTab);
    setHorizontalTab(null);
    push(`${window.location.origin}/${pathname}?${params}`);
  };
  // const setHorizontal = (horizontalTab: any) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("horizontalTab", horizontalTab);
  //   push(`${window.location.origin}/${pathname}?${params}`);
  // };
  let verticalTabTabPotentialProducts: React.ReactNode;

  switch (verticalTab) {
    case "cashew":
      verticalTabTabPotentialProducts = <CashewTab />;
      break;

    case "cassava":
      verticalTabTabPotentialProducts = <CassavaTab dict={dict} />;
      break;

    case "pailinLongan":
      verticalTabTabPotentialProducts = <PailinLonganTab dict={dict} />;
      break;
    case "rice":
      verticalTabTabPotentialProducts = <RiceTab dict={dict} />;
      break;

    case "pepper":
      verticalTabTabPotentialProducts = <></>;
      break;

    default:
      verticalTabTabPotentialProducts = <CashewTab />;
      break;
  }
  return (
    <section className="bg-[#f6f7f8]">
      <div className="container mx-auto px-4 pb-12">
        <Title title="មុខទំនិញសក្ដានុពលខ្ពស់" />
        <div className="lg:grid grid-cols-11 gap-6 hidden">
          {/* Sidebar */}
          <div className="col-span-3 bg-white shadow-md h-[288px]">
            <div className="w-full shadow-sm">
              <div ref={scrollContainerRef} className="p-2 rounded-md w-full ">
                {highPotentialProductsVerticalTabs.map((type) => (
                  <div
                    key={type.id}
                    className={cn(
                      "px-4 py-3 rounded-sm  cursor-pointer my-1",
                      "hover:bg-gray-50",
                      verticalTab === type.value
                        ? "bg-gradient-to-b from-[#2980B9] to-[#286e9d] text-white"
                        : "after:bg-transparent border border-gray-100"
                    )}
                    onClick={() => (
                      setVerticalTab(type.value), setVertical(type.value)
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
            {verticalTabTabPotentialProducts}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighPotentialProductsScreen;
