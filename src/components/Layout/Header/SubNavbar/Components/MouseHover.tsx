"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface SubMenuHoverProp {
  data: any;
}
import { useEffect, useState } from "react";
const SubMenuHover = ({ data }: SubMenuHoverProp) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavigationMenuTrigger
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${isScrolled ? "text-white" : ""}`}
      >
        ព័ត៌មានពាណិជ្ជកម្ម
      </NavigationMenuTrigger>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute mt-1 border rounded-md bg-white  flex items-center justify-between transition-opacity duration-300   ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={`flex justify-center `}>
          <div className="grid w-[250px] p-2  ">
            {data.map((item: any) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium">{item?.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuHover;
