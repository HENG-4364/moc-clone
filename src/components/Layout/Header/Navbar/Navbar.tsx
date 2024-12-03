import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#2980B9] py-[10px]">
        <div className="container mx-auto w-full">
          <div className="flex justify-between items-center">
            <div>
              <Link href={`#`}>
                <Image
                  src="/moclogo.png"
                  alt="moclogo"
                  className="w-[163px] sm:w-[261px]"
                  width={1500}
                  height={416}
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link href={`#`}>
                <Image
                  src="/kh-flag-title.png"
                  alt="moclogo"
                  className="w-[163px] sm:w-[261px]"
                  width={1500}
                  height={416}
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div className="sm:hidden flex items-start gap-3 cursor-pointer">
              <div>
                <Image
                  width={500}
                  height={500}
                  src={"/Flag_of_Cambodia.png"}
                  alt="MoC Flag Change Language"
                  className="w-[25px] pt-1 "
                />
              </div>
              <div>
                <Search size={23} color="white" />
              </div>
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Menu size={23} color="white" />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      <SheetClose asChild>......</SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
