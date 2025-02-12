"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type TypeOfBusinessCardProps = {
  cardTitle: string;
  id?: number;
  thumbnail: string;
};

const TypeOfBusinessCard: React.FC<TypeOfBusinessCardProps> = ({
  cardTitle,
  id,
  thumbnail,
}) => {
  const router = useRouter();

  return (
    <Card
      className="bg-white rounded-md border-none py-10 overflow-hidden relative text-center transition-all duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-xl cursor-pointer"
      onClick={() => router.push(`/business-directory-category/${id}`)}
    >
      <CardContent className="p-0">
        <div className="relative rounded-lg overflow-hidden mb-2">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={cardTitle}
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <p className="font-bold text-lg text-gray-800 mt-2">{cardTitle}</p>
      </CardContent>
    </Card>
  );
};

export default TypeOfBusinessCard;
