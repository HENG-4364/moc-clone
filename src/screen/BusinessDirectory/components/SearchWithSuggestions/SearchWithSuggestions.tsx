"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchResult {
  id: string;
  text: string;
}

const sampleResults: SearchResult[] = [
  { id: "1", text: "Construction" },
  {
    id: "2",
    text: "General pest control (termite control) and vermin control",
  },
  { id: "3", text: "General Pest Control Which Includes Cockroach Control" },
  { id: "4", text: "Gravity Conveyors, Screw Conveyors" },
  { id: "5", text: "2 Screw Conveyor, Roller Conveyor" },
  {
    id: "6",
    text: "6 Rooms (1 Master bed room - air conditioned / 5 room...)",
  },
  { id: "7", text: "Concrete Pipes & Other Concrete Products" },
  { id: "8", text: "Construction plastic and construction materials" },
];

export function SearchWithSuggestions({ dict }: { dict: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const filteredResults = useMemo(() => {
    if (!searchTerm) return [];
    return sampleResults.filter((result) =>
      result.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/business-directory/search?q=${searchTerm}`);
  };

  return (
    <div className="relative w-full h-[450px] pt-20 flex justify-center text-center bg-[url('/business-directory-search-banner.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="z-10 text-white p-5">
        <h1 className="mb-5 text-4xl font-bold">
          {dict?.search_by_business_name}
        </h1>
        <div className="w-full max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="bg-white bg-opacity-30 p-4 rounded-lg">
              <div className="bg-white rounded-md flex items-center">
                <Search className="ml-2 h-5 w-5 text-gray-400" />
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Input
                      type="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setOpen(true)}
                      placeholder="ស្វែងរកអាជីវកម្ម"
                      className="border-0 focus:ring-0"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="start">
                    <Command>
                      <CommandInput placeholder="ស្វែងរកអាជីវកម្ម" />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {filteredResults.map((result) => (
                            <CommandItem
                              key={result.id}
                              onSelect={() => {
                                setSearchTerm(result.text);
                                setOpen(false);
                              }}
                            >
                              <Search className="mr-2 h-4 w-4" />
                              {result.text}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Button type="submit" className="m-1">
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
