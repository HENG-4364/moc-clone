"use client";

import { Suspense } from "react";
import { JoinSection } from "./components/join";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { SearchWithSuggestions } from "./components/search";
import TypeOfBusiness from "./components/type";
import CompanyCardPlaceholder from "./components/components/p1";
import CompanyCard from "./components/components/p2";
import SwiperCard from "./components/components/swiper";
const fakeCompanies = [
  {
    khCompanyName: "ក្រុមហ៊ុន អេកូស៊ីស្ទឹម",
    enCompanyName: "Ecosystem Co., Ltd.",
    companyType: "Technology",
    logoSrc: "/images/eco_logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/companies/ecosystem",
    phoneNumber: "012 345 678",
  },
  {
    khCompanyName: "ក្រុមហ៊ុន សុខភាព",
    enCompanyName: "HealthCare Inc.",
    companyType: "Healthcare",
    logoSrc: "/images/healthcare_logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/companies/healthcare",
    phoneNumber: "098 765 432",
  },
  {
    khCompanyName: "ក្រុមហ៊ុន ឃ្រីអេធីវ",
    enCompanyName: "Creative Solutions",
    companyType: "Marketing",
    logoSrc: "/images/creative_logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/companies/creative",
    phoneNumber: "011 223 344",
  },
];

export default function BusinessDirectoryScreen({ dict }: { dict: any }) {
  return (
    <Suspense fallback={<div />}>
      <BusinessDirectoryContent dict={dict} />
    </Suspense>
  );
}

function BusinessDirectoryContent({ dict }: { dict: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  return (
    <section className="bg-gray-100 pb-16">
      <div className="mb-8">
        <SearchWithSuggestions dict={dict} />
      </div>

      <TypeOfBusiness dict={dict} />

      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">នាមករណ៍អាជីវកម្ម</h3>
          <Button
            variant="ghost"
            className="flex items-center"
            onClick={() => router.push("/business-directory/search")}
          >
            មើលទាំងអស់ <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {!fakeCompanies ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CompanyCardPlaceholder key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fakeCompanies.length > 0 ? (
              fakeCompanies.map((item: any, idx: number) => (
                <CompanyCard key={idx} {...item} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center">
                <Image
                  src="/empty-filter.png"
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold mb-2">
                    <i className="bi bi-exclamation-circle-fill mr-2"></i>
                    {dict?.error_message.title}
                  </p>
                  <p className="text-gray-600">
                    {dict?.error_message.sub_title}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-primary text-white py-12 mt-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-blue-200 mb-2">ចូលរួមជាដៃគូរអាជីវកម្ម!</p>
              <h2 className="text-3xl font-bold mb-4">
                ទទួលបានអត្ថប្រយោជន៍បន្ថែម និងផ្សព្វផ្សាយអាជីវកម្មរបស់អ្នក។
              </h2>
              <div className="space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => router.push("/business-directory/login")}
                >
                  ចូលគណនី
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/business-directory/sign-up")}
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SwiperCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
