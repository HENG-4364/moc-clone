import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type ImageCardProps = {
  imageSrc: string;
  logoSrc: React.ReactNode;
  title: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, logoSrc, title }) => (
  <Card className="relative overflow-hidden rounded-lg border-none">
    <Image
      src={imageSrc}
      alt="Card image"
      width={500}
      height={270}
      className="w-full min-h-[270px] object-cover brightness-75"
    />
    <div className="absolute inset-0 flex items-end bg-black/30 p-4 text-white">
      <CardContent className="flex w-full items-center flex-wrap">
        <div className="mr-2 text-lg">{logoSrc}</div>
        <div className="text-lg font-bold leading-snug line-clamp-2">
          {title}
        </div>
      </CardContent>
    </div>
  </Card>
);

export default ImageCard;
