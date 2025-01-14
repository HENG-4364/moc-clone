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

interface Product {
  id: string;
  name: string;
}

export default function CommodityValuesScreen() {
  const [date, setDate] = useState<Date>(new Date("2025-01-01"));
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Product[]>([]);
  const [activeView, setActiveView] = useState("chart");

  // Simulated product data
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

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-2xl font-bold text-center mb-8">
        សន្និធិនៃទិន្នប័យចាស់
      </h1>

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

      <Tabs value={activeView} onValueChange={setActiveView} className="mb-8">
        <TabsList>
          <TabsTrigger value="chart" >
            <BarChart3 className="h-6 w-6 mr-2 " />
            {/* តារាង */}
          </TabsTrigger>
          <TabsTrigger value="line">
            <LineChart className="h-6 w-6 mr-2" />
            {/* ខ្សែកោង */}
          </TabsTrigger>
          <TabsTrigger value="grid">
            <LayoutGrid className="h-6 w-6 mr-2" />
            {/* ក្រឡា */}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="mt-4">
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
                គ្មានទិន្នន័យ
              </h2>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="line">
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <p>គ្មានទិន្នន័យ</p>
          </div>
        </TabsContent>

        <TabsContent value="grid">
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <p>គ្មានទិន្នន័យ</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
