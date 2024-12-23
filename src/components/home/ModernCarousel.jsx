import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "BENJON",
    subtitle: "WEBSITE",
    year: "2012",
    image: "/carousel/1.jpg?height=800&width=600",
  },
  {
    title: "CREATIVE",
    subtitle: "PORTFOLIO",
    year: "2015",
    image: "/carousel/2.jpg?height=800&width=600",
  },
  {
    title: "DIGITAL",
    subtitle: "AGENCY",
    year: "2018",
    image: "/carousel/3.jpg?height=800&width=600",
  },
  {
    title: "MODERN",
    subtitle: "DESIGN",
    year: "2023",
    image: "/carousel/4.jpg?height=800&width=600",
  },
];

export default function ModernCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", onSelect);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="h-[1100px] bg-black">
      <div className="relative w-[90%] mx-auto h-[90%] my-auto">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div className="grid h-full grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-center p-6 md:p-12">
                    <div className="space-y-4">
                      <div className="text-white text-6xl md:text-8xl font-bold">
                        {slide.title}
                      </div>
                      <div className="text-white text-6xl md:text-8xl font-bold">
                        {slide.subtitle}
                      </div>
                      <div className="text-white text-6xl md:text-8xl font-bold">
                        {slide.year}
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden md:block">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute top-6 right-6 text-white text-xl">
            <span>{current}</span>
            <span className="mx-1">/</span>
            <span>{count}</span>
          </div>

          <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent">
            <FaArrowLeft className="w-8 h-8 text-white" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent">
            <FaArrowRight className="w-8 h-8 text-white" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
