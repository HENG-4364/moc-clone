"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/Title/Title";

interface MessageFromMinisterProps {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

export function MessageFromMinister({
  title,
  subtitle,
  bgImage,
  image,
}: MessageFromMinisterProps) {
  const params = useParams<{ lang: string }>();

  return (
    <div
      className="w-full py-[60px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative  rounded-lg overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src={`${image ? image : "/ministry-of-commerece.jpg"}`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="space-y-6">
              <div className={` `}>
                <div className="mb-6">
                  <div
                    className=" mb-5 text-4xl"
                    style={{
                      fontFamily: "Moul, serif",
                      lineHeight: "4rem",
                    }}
                  >
                    {title}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-24 bg-[#FAB4A2]" />
                    <div className="h-1 w-8 bg-[#FE724E]" />
                  </div>
                </div>
              </div>
              <div className="leading-10 text-lg font-bold">
                {subtitle}
              </div>
              {/* Uncomment and adjust as needed for the button
              <Link
                href={`/${currentLang}/page/messages-from-minister`}
                className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {button}
              </Link>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
