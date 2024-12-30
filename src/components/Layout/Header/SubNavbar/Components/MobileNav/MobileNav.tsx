"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const business_information: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "ឯកសារផ្លូវការ​",
    href: "/document-category/official-document",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ព្រឹត្តិប័ត្រព័ត៌មានពាណិជ្ជកម្ម",
    href: "/document-category/bulletin",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "គម្រោង",
    href: "/document-category/projects",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "តំបន់សេដ្ឋកិច្ចពិសេស",
    href: "/document-category/special-economic-zone",
    description: "Visually or semantically separates content.",
  },
  {
    title: "របាយការណ៍បូកសរុបសន្និបាតប្រចាំឆ្នាំ",
    href: "/document-category/annual-meeting-report",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu size={23} color="white" />
      </SheetTrigger>
      <SheetContent side="left" className="">
        <SheetHeader>
          <div className="flex justify-center">
            <Link href={"/"} onClick={handleLinkClick}>
              <Image
                src="/moc-logo.png"
                alt="moclogo"
                className="w-[163px] sm:w-[200px]"
                width={1500}
                height={416}
                quality={100}
                priority
              />
            </Link>
          </div>
        </SheetHeader>
        <div className="py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              className="pl-10 w-full max-w-xl border border-gray-100 shadow-sm"
              placeholder="ស្វែងរកឯកសារ..."
            />
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div className="py-2 hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer">
            <Link href="#" className="text-lg" onClick={handleLinkClick}>
              ទំព័រដើម
            </Link>
          </div>
          <AccordionItem value="item-1" className="border-none text-lg">
            <AccordionTrigger
              className="py-2 hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>អំពីក្រសួង</div>
            </AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ប្រសាស៍ពីលោកជំទាវរដ្ឋមន្រ្តី
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ប្រវត្តិក្រសួងពាណិជ្ជកម្ម
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  រចនាសម្ព័ន្ធអង្គភាព
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Socio-economic development master plan for Cambodia - Laos -
                  Vietnam development triangle (2004)
                </Link>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger
              className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>សេវាកម្មពាណិជ្ជកម្ម</div>
            </AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ការចុះឈ្មោះក្រុមហ៊ុន
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ការចុះឈ្មោះម៉ាកពាណិជ្ជកម្ម
                </Link>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger
              className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>ព័ត៌មានពាណិជ្ជកម្ម្ម</div>
            </AccordionTrigger>
            <AccordionContent>
              {business_information.map((item: any, idx: number) => (
                <nav key={idx} className="flex flex-col space-y-2">
                  <Link
                    href={item?.href}
                    className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    {item?.title}
                  </Link>
                </nav>
              ))}
            </AccordionContent>
          </AccordionItem>
          <div className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer">
            <Link href="#" onClick={handleLinkClick}>
              ព័ត៌មាន
            </Link>
          </div>
        </Accordion>

        <div className="flex justify-center">
          <div className="fixed bottom-4 flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://facebook.com"
                target="_blank"
                onClick={handleLinkClick}
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com"
                target="_blank"
                onClick={handleLinkClick}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://youtube.com"
                target="_blank"
                onClick={handleLinkClick}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://t.me"
                target="_blank"
                onClick={handleLinkClick}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
