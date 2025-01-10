"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import Image from "next/image";
import style from "./search.module.scss";
import { FaFilePdf } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const SearchScreen = () => {
  const router = useRouter();
  return (
    <section className="bg-[#F6F7F8] pt-5 lg:pt-10 pb-20">
      <div className="container">
        <div>
          <div className="text-2xl lg:text-3xl font-semibold py-8">
            ស្វែងរកព័ត៌មាន និងឯកសារផ្លូវការ
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
            <Input
              type="search"
              className="pl-12 h-14 w-full border border-gray-100 shadow-sm"
              placeholder="ស្វែងរកឯកសារ..."
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Button
                type="submit"
                className="bg-[#337ab7] hover:bg-[#286090] text-white px-6"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - News Results */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-xl font-semibold mb-4">
              លទ្ធផលស្វែងរកព័ត៌មានសរុបទាំង៖ ១
            </div>

            {/* News Item */}
            <div
              className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer"
              onClick={() => router.push("/news/1")}
            >
              <div className={`p-[15px]`}>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
                    <div className="relative w-full">
                      <Image
                        src={"/news1.webp"}
                        alt="ministry"
                        className="w-full h-full rounded-lg"
                        width={1050}
                        height={1068}
                        quality={100}
                        priority
                      />
                      <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
                        ព័ត៌មាន
                      </span>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <strong>១៥-វិច្ឆិកា-២០២៤</strong>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8  lg:col-span-9">
                    <div>
                      <h4 className="text-xl font-semibold line-clamp-2 leading-9">
                        លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម
                        អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក
                      </h4>
                      <p className="pt-2 text-base line-clamp-3 leading-6">
                        (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤
                        នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម
                        និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន
                        លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម
                        និងពិសារអាហារការងារពេលព្រឹក។
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer"
              onClick={() => router.push("/news/1")}
            >
              <div className={`p-[15px]`}>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
                    <div className="relative w-full">
                      <Image
                        src={"/news2.webp"}
                        alt="ministry"
                        className="w-full h-full rounded-lg"
                        width={1050}
                        height={1068}
                        quality={100}
                        priority
                      />
                      <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
                        ព័ត៌មាន
                      </span>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <strong>១៥-វិច្ឆិកា-២០២៤</strong>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8  lg:col-span-9">
                    <div>
                      <h4 className="text-xl font-semibold line-clamp-2 leading-9">
                        លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម
                        អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក
                      </h4>
                      <p className="pt-2 text-base line-clamp-3 leading-6">
                        (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤
                        នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម
                        និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន
                        លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម
                        និងពិសារអាហារការងារពេលព្រឹក។
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer"
              onClick={() => router.push("/news/1")}
            >
              <div className={`p-[15px]`}>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
                    <div className="relative w-full">
                      <Image
                        src={"/news3.webp"}
                        alt="ministry"
                        className="w-full h-full rounded-lg"
                        width={1050}
                        height={1068}
                        quality={100}
                        priority
                      />
                      <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
                        ព័ត៌មាន
                      </span>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <strong>១៥-វិច្ឆិកា-២០២៤</strong>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8  lg:col-span-9">
                    <div>
                      <h4 className="text-xl font-semibold line-clamp-2 leading-9">
                        លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម
                        អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក
                      </h4>
                      <p className="pt-2 text-base line-clamp-3 leading-6">
                        (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤
                        នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម
                        និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន
                        លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម
                        និងពិសារអាហារការងារពេលព្រឹក។
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer"
              onClick={() => router.push("/news/1")}
            >
              <div className={`p-[15px]`}>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
                    <div className="relative w-full">
                      <Image
                        src={"/news3.webp"}
                        alt="ministry"
                        className="w-full h-full rounded-lg"
                        width={1050}
                        height={1068}
                        quality={100}
                        priority
                      />
                      <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
                        ព័ត៌មាន
                      </span>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <strong>១៥-វិច្ឆិកា-២០២៤</strong>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8  lg:col-span-9">
                    <div>
                      <h4 className="text-xl font-semibold line-clamp-2 leading-9">
                        លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម
                        អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក
                      </h4>
                      <p className="pt-2 text-base line-clamp-3 leading-6">
                        (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤
                        នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម
                        និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន
                        លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម
                        និងពិសារអាហារការងារពេលព្រឹក។
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer"
              onClick={() => router.push("/news/1")}
            >
              <div className={`p-[15px]`}>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
                    <div className="relative w-full">
                      <Image
                        src={"/news3.webp"}
                        alt="ministry"
                        className="w-full h-full rounded-lg"
                        width={1050}
                        height={1068}
                        quality={100}
                        priority
                      />
                      <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
                        ព័ត៌មាន
                      </span>
                    </div>
                    <div className="flex items-center justify-center pt-5">
                      <strong>១៥-វិច្ឆិកា-២០២៤</strong>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8  lg:col-span-9">
                    <div>
                      <h4 className="text-xl font-semibold line-clamp-2 leading-9">
                        លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម
                        អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក
                      </h4>
                      <p className="pt-2 text-base line-clamp-3 leading-6">
                        (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤
                        នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម
                        និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន
                        លោកជំទាវ Astrid Emilie Helle
                        ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​
                        និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម
                        និងពិសារអាហារការងារពេលព្រឹក។
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - PDF Documents */}
          <div className="col-span-1 lg:col-span-1">
            <div className=" sticky top-20  transition-colors duration-300 ease-in-out  ">
              <div className="text-xl font-semibold mb-4 ">
                លទ្ធផលស្វែងរកឯកសារសរុបទាំង៖ ១
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded">
                    <span className="text-red-500 font-bold text-sm">
                      <FaFilePdf size={40} />
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                  Vol 13 for September 2024.pdf
                </h3>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded">
                    <span className="text-red-500 font-bold text-sm">
                      <FaFilePdf size={40} />
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                  Vol 13 for September 2024.pdf
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchScreen;
