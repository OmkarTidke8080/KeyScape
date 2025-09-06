"use client";

import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const floorPlans = [
  { id: "1bhk", label: "1 BHK", img: "/images/plans/1bhk.png" },
  { id: "2bhk", label: "2 BHK", img: "/images/plans/2bhk.png" },
  { id: "3bhk", label: "3 BHK", img: "/images/plans/3bhk.png" },
];

export default function FloorPlansSection() {
  const [activeBhk, setActiveBhk] = useState("1bhk");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Floor Plans
        </h2>

        <Tabs defaultValue="floor" className="w-full">
          {/* Main Tabs */}
          <TabsList className="h-16 flex justify-center gap-6 bg-gray-100 shadow-lg rounded-full p-2 w-fit mx-auto">
            <TabsTrigger
              value="floor"
              className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300
      data-[state=active]:bg-orange-500 data-[state=active]:text-white
      hover:bg-orange-100 hover:text-orange-600 data-[state=active]:shadow-lg"
            >
              Floor Plans
            </TabsTrigger>
            <TabsTrigger
              value="master"
              className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300
      data-[state=active]:bg-orange-500 data-[state=active]:text-white
      hover:bg-orange-100 hover:text-orange-600 data-[state=active]:shadow-lg"
            >
              Master Layout
            </TabsTrigger>
          </TabsList>

          {/* Floor Plans with BHK sub-tabs */}
          <TabsContent value="floor" className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
              {/* Left side - BHK Options */}
              <div className="lg:col-span-1 space-y-4">
                {floorPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setActiveBhk(plan.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg shadow transition ${
                      activeBhk === plan.id
                        ? "bg-orange-500 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>

              {/* Right side - Selected Image */}
              <div className="lg:col-span-3 flex flex-col items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full h-[500px] cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
                      <Image
                        src={
                          floorPlans.find((plan) => plan.id === activeBhk)
                            ?.img || "/plans/placeholder.png"
                        }
                        alt={activeBhk}
                        fill
                        className="object-contain hover:scale-105 transition-transform"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl">
                    <Image
                      src={
                        floorPlans.find((plan) => plan.id === activeBhk)?.img ||
                        "/plans/placeholder.png"
                      }
                      alt={activeBhk}
                      width={1200}
                      height={800}
                      className="rounded-lg object-contain"
                    />
                  </DialogContent>
                </Dialog>

                <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                  Book This Flat
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Master Layout Tab */}
          <TabsContent value="master" className="mt-12">
            <div className="flex flex-col items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full max-w-5xl h-[500px] cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
                    <Image
                      src="/images/plans/master.webp"
                      alt="Master Layout"
                      fill
                      className="object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl">
                  <Image
                    src="/images/plans/master.webp"
                    alt="Master Layout"
                    width={1200}
                    height={800}
                    className="rounded-lg object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
