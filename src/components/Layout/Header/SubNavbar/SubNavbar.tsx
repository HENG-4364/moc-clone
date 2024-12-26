"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CreditCard, Keyboard, Search, Settings, User } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function SubNavbar() {
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
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-[#2980B9]" : "bg-white"
      }`}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="container mx-auto ">
        <div className="hidden xl:flex justify-between items-center py-[10px]">
          <div>
            <NavigationMenu>
              <NavigationMenuList className="">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${
                        isScrolled ? "text-white" : ""
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      ទំព័រដើម
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${isScrolled ? "text-white" : ""}`}
                  >
                    អំពីក្រសួង
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${isScrolled ? "text-white" : ""}`}
                  >
                    សេវាកម្មពាណិជ្ជកម្ម
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${isScrolled ? "text-white" : ""}`}
                  >
                    ព័ត៌មានពាណិជ្ជកម្ម
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex justify-center">
                      <div className="grid w-[300px] gap-3 p-4 md:grid-cols-2 ">
                        {components.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {component.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {component.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${
                        isScrolled ? "text-white" : ""
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      ព័ត៌មាន
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${
                        isScrolled ? "text-white" : ""
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      សំណួរចម្លើយ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`${isScrolled ? "text-white" : ""}`}
                  >
                    ព័ត៌មានពាណិជ្ជកម្ម
                  </NavigationMenuTrigger>
                  <div
                    // className="absolute bg-white "
                    className={`absolute top-7 border rounded-md bg-white  mt-4 flex items-center justify-between transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex justify-center">
                      <div className="grid w-[300px] gap-3 p-4 md:grid-cols-2 ">
                        {components.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {component.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {component.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer ${
              isScrolled ? "text-white" : ""
            }`}
          >
            <div>
              <Search size={20} />
            </div>
            <svg
              width="5"
              height="15"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="0.499999"
                y2="11.5"
                stroke={`${isScrolled ? "#FFFFFF" : "#333333"}`}
                strokeLinecap="round"
              ></line>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <div>KH</div>
                <Image
                  width={500}
                  height={500}
                  src={"/Flag_of_Cambodia.png"}
                  alt=""
                  style={{
                    width: "25px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <svg
              width="5"
              height="15"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="0.499999"
                y2="11.5"
                stroke={`${isScrolled ? "#FFFFFF" : "#333333"}`}
                strokeLinecap="round"
              ></line>
            </svg>
            <div>
              <DropdownMenu modal>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-[#2980B9] text-white hover:bg-[#297fb9dd] hover:text-white"
                  >
                    បណ្ដាញសង្គម
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
