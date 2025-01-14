"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  LineChart,
  LayoutGrid,
  Inbox,
  XCircle,
  CalendarIcon,
} from "lucide-react";
import MySelect from "./Components/MultiSelect";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Title } from "@/components/Title/Title";

interface Product {
  id: string;
  name: string;
}

export default function CommodityValuesScreen() {
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get("q");
  const [date, setDate] = useState<Date>(new Date("2025-01-01"));
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Product[]>([]);
  const [tab, setTab] = useState(tabQuery ? tabQuery : "bar");
  const router = useRouter();

  const productList: Product[] = [
    { id: "1", name: "Product A" },
    { id: "2", name: "Product B" },
    { id: "3", name: "Product C" },
    { id: "4", name: "Product D" },
    { id: "5", name: "Product E" },
  ];

  const categoryList: Product[] = [
    { id: "1", name: "Category A" },
    { id: "2", name: "Category B" },
    { id: "3", name: "Category C" },
  ];

  const productOptions = productList.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const categoryOptions = categoryList.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const onChangeProduct = (selected: { label: string; value: string }[]) => {
    setSelectedProducts(
      selected.map((item) => ({ id: item.value, name: item.label }))
    );
  };

  const onChangeCategory = (selected: { label: string; value: string }[]) => {
    setSelectedCategories(
      selected.map((item) => ({ id: item.value, name: item.label }))
    );
  };
  const onChangeTab = (tab: string) => {
    router.push(`/commodity-values?q=${tab}`);
    setTab(tab);
  };
  return (
    <div className="container mx-auto p-6">
      <Title title={"សន្ទស្សន៍ថ្លៃទំនិញប្រចាំថ្ងៃ"} />
      <div className="grid gap-6 md:grid-cols-[300px,1fr,1fr] mb-8">
        <div>
          <label className="block text-sm mb-2">ថ្ងៃខែឆ្នាំ</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>ជ្រើសរើសកាលបរិច្ឆេទ</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm mb-2">ផលិតផល</label>
          <MySelect
            options={productOptions}
            isMulti={true}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={onChangeProduct}
            allowSelectAll={true}
            value={selectedProducts.map((product) => ({
              label: product.name,
              value: product.id,
            }))}
            placeholder="ជ្រើសរើសផលិតផល..."
          />
        </div>

        <div>
          <label className="block text-sm mb-2">ប្រភេទ</label>
          <MySelect
            options={categoryOptions}
            isMulti={true}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={onChangeCategory}
            allowSelectAll={true}
            value={selectedCategories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            placeholder="ជ្រើសរើសប្រភេទ..."
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div
          className={cn(
            "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
            tab === "bar" ? "bg-[#2980B9] text-white" : ""
          )}
          onClick={() => onChangeTab("bar")}
        >
          <BarChart3 className="h-5 w-5" />
        </div>

        <div
          className={cn(
            "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
            tab === "line" ? "bg-[#2980B9] text-white" : ""
          )}
          onClick={() => onChangeTab("line")}
        >
          <LineChart className="h-5 w-5" />
        </div>

        <div
          className={cn(
            "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
            tab === "table" ? "bg-[#2980B9] text-white" : ""
          )}
          onClick={() => onChangeTab("table")}
        >
          <LayoutGrid className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4">
        {tab === "bar" && (
          <div className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                <div className="w-50 h-50 mb-2">
                  <Image
                    src="/no-data.svg"
                    alt="No results found"
                    width={128}
                    height={128}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  គ្មានទិន្នន័យ Bar
                </h2>
              </div>
            </div>
          </div>
        )}
        {tab === "line" && (
          <div className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                <div className="w-50 h-50 mb-2">
                  <Image
                    src="/no-data.svg"
                    alt="No results found"
                    width={128}
                    height={128}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  គ្មានទិន្នន័យ Line
                </h2>
              </div>
            </div>
          </div>
        )}
        {tab === "table" && (
          <div className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                <div className="w-50 h-50 mb-2">
                  <Image
                    src="/no-data.svg"
                    alt="No results found"
                    width={128}
                    height={128}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  គ្មានទិន្នន័យ Table
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
