"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import type React from "react"; // Added import for React

type CompanyCardProps = {
  khCompanyName?: string;
  enCompanyName?: string;
  companyType?: string;
  logoSrc: string;
  dict?: any;
  link?: string;
  phoneNumber?: string;
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  khCompanyName,
  enCompanyName,
  companyType,
  logoSrc,
  dict,
  link,
  phoneNumber,
}) => {
  const router = useRouter();

  return (
    <Card
      className="cursor-pointer bg-white shadow-lg rounded-lg p-4 h-full"
      onClick={() => router.push(link || "")}
    >
      <CardContent className="p-0">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-4">
          <div className="w-full xl:w-2/3 mb-4 xl:mb-0">
            <h5 className="font-bold mb-1 truncate">{khCompanyName}</h5>
            <h6 className="font-bold truncate">{enCompanyName}</h6>
          </div>
          <div className="w-full xl:w-1/3 flex justify-start xl:justify-end">
            <Image
              alt={`${enCompanyName} logo`}
              src={logoSrc || "/placeholder.svg"}
              width={80}
              height={80}
              className="rounded-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap">
            <p>{dict?.contact_number} ៖&nbsp;</p>
            <p className="font-bold">{phoneNumber}</p>
          </div>
          <div className="flex flex-wrap">
            <p>{dict?.type_of_work} ៖&nbsp;</p>
            <p className="font-bold">{companyType}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
