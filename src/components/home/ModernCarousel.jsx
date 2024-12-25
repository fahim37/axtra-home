import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FadeB from "../animated/FadeB";

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
    <div className="h-[1100px] bg-black mt-10">
      <FadeB className="uppercase text-white md:pt-24 md:pl-24 text-lg">
        Featured
        <br />
        work
      </FadeB>

      <div className="relative w-[90%] mx-auto h-[90%] pt-16">
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
                <div className="grid h-full grid-cols-1 md:grid-cols-2 relative">
                  <div className="flex flex-col justify-center p-6 md:p-12 z-10">
                    <FadeB className="space-y-4">
                      <div>
                        <div className="text-white text-6xl md:text-[150px] font-bold">
                          {slide.title}
                        </div>
                        <div className="text-white text-6xl md:text-[150px] font-bold md:translate-x-[35%]">
                          {slide.subtitle}
                        </div>
                        <div className="text-white text-6xl md:text-[150px] font-bold">
                          {slide.year}
                        </div>
                      </div>
                    </FadeB>
                  </div>

                  <div className="absolute inset-0 md:relative">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute top-0 left-[30%] text-white text-xl">
            <span className="text-6xl">{current}</span>
            <span className="mx-1 text-6xl">/</span>
            <span>{count}</span>
          </div>

          <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-white hover:bg-white text-white"></CarouselPrevious>
          <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-transparent border-white hover:bg-white text-white"></CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
