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
} from "lucide-react";
import { DocumentSearch } from "./components/DocumentSearch/DocumentSearch";
import { DocumentFilters } from "./components/DocumentFilter/DocumentFilter";
import { FeaturedDocuments } from "./components/DocumentFeature/DocumentFeature";
import { Title } from "@/components/Title/Title";

const documentTypes = [
  {
    id: "all",
    label: "ទាំងអស់",
  },
  {
    id: "announcement",
    label: "សេចក្តីជូនដំណឹង",
  },
  {
    id: "decree",
    label: "អនុក្រឹត្យ",
  },
  {
    id: "guidelines",
    label: "គោលការណ៍ណែនាំ",
  },
];

const documents = [
  {
    id: 1,
    icon: Search,
    title: "សេចក្តីជូនដំណឹង",
    description: "ស្វែងរកឯកសារផ្លូវការ និងសេចក្តីជូនដំណឹងផ្សេងៗ",
    color: "bg-blue-500/10 text-blue-500",
    count: 25,
  },
  {
    id: 2,
    icon: Image,
    title: "ប្រកាស",
    description: "ប្រកាសព័ត៌មាន និងការផ្សព្វផ្សាយផ្សេងៗ",
    color: "bg-purple-500/10 text-purple-500",
    count: 18,
  },
  {
    id: 3,
    icon: Ship,
    title: "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
    description: "ឯកសារពាក់ព័ន្ធនឹងការដឹកជញ្ជូន និងឡូជីស្ទីក",
    color: "bg-green-500/10 text-green-500",
    count: 32,
  },
  {
    id: 4,
    icon: ScrollText,
    title: "អនុក្រឹត្យ",
    description: "អនុក្រឹត្យ និងឯកសារផ្លូវការផ្សេងៗ",
    color: "bg-red-500/10 text-red-500",
    count: 15,
  },
  {
    id: 5,
    icon: Scale,
    title: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
    description: "កិច្ចព្រមព្រៀង និងឯកសារពាណិជ្ជកម្មផ្សេងៗ",
    color: "bg-amber-500/10 text-amber-500",
    count: 28,
  },
  {
    id: 6,
    icon: ClipboardCheck,
    title: "គោលការណ៍ណែនាំ",
    description: "គោលការណ៍ណែនាំ និងបទបញ្ជាផ្សេងៗ",
    color: "bg-teal-500/10 text-teal-500",
    count: 22,
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

export function OfficialDocumentScreen() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Title title={"ឯកសារផ្លូវការ"} />

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
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
          </div>

          {/* Search */}
          <DocumentSearch />
        </div>

        {/* Featured Documents */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">ឯកសារថ្មីៗ</h2>
            <DocumentFilters />
          </div>
          <FeaturedDocuments />
        </div>

        {/* Document Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
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
                    <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {doc.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
