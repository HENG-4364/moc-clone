import { BookmarkIcon, MapPin, Phone, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BusinessDirectoryDetailScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="mb-6 h-[300px] overflow-hidden rounded-lg bg-gray-200">
              <Image
                src=""
                alt="Map"
                width={300}
                height={300}
                className="h-full w-full "
              />
              <div className="flex justify-end gap-2 p-4">
                <Button variant="secondary" size="sm">
                  Street view
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-yellow-500 hover:bg-yellow-600"
                >
                  Get directions
                </Button>
              </div>
            </div>

            {/* Business Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-6">
                  <div className="h-20 w-20 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-lg border bg-gray-50 p-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Business placeholder"
                      width={100}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <div className="flex gap-2">
                        <h1 className="md:text-2xl font-bold">
                          1 Premiere Land Marketing Company
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="md:text-2xl font-bold">
                          សដថថដសថហថហសដថថដសហថហ
                        </h1>
                      </div>
                      <div className="mt-1 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs md:text-sm text-gray-600">
                        Commercial Properties
                      </div>
                    </div>
                    <div className="float-end flex items-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <BookmarkIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        2/F A.B. Sandoval Building, Oranbo Drive corner Shaw
                        Boulevard, Pasig City 1600 Metro Manila
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Landline</p>
                      <p className="text-gray-600">+63 (2) 8 635 4011</p>
                      <p className="text-gray-600">+63 (2) 7 901 4459</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardContent className="p-4">
                <Tabs defaultValue="business" className="">
                  <TabsList className="w-full justify-start border-b">
                    <TabsTrigger
                      value="business"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500"
                    >
                      Business Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500"
                    >
                      Reviews
                    </TabsTrigger>
                    <TabsTrigger
                      value="photos"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500"
                    >
                      Photos
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500"
                    >
                      Videos
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="business" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold">
                          <span className="rounded-full bg-yellow-100 p-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                          </span>
                          Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Commercial Properties",
                            "Real Estate Brokers",
                            "Residential Properties",
                          ].map((category) => (
                            <Link
                              key={category}
                              href="#"
                              className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:bg-gray-200"
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-yellow-100 p-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </span>
                  People Also Looked for
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link
                      key={i}
                      href="#"
                      className="flex gap-4 hover:bg-gray-50"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Business"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Name</h4>
                        <p className="text-sm text-gray-600">
                          Location details
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-yellow-100 p-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </span>
                  Nearby Businesses
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link
                      key={i}
                      href="#"
                      className="flex gap-4 hover:bg-gray-50"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Business"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Name</h4>
                        <p className="text-sm text-gray-600">0.05 km</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
