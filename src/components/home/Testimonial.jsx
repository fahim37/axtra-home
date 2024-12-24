import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImQuotesLeft } from "react-icons/im";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonial() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
      author: "MARIA D. HALK",
      title: "MANAGING DIRECTOR",
    },
    {
      quote:
        "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
      author: "MARIA D. HALK",
      title: "MANAGING DIRECTOR",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="lg:pt-16">
      <div className="relative md:h-[1100px] overflow-hidden bg-white lg:px-4 lg:py-20">
        <div
          className="absolute bottom-[30%] right-0 h-[60%] w-full bg-cover bg-center bg-no-repeat lg:block hidden"
          style={{ backgroundImage: "url('/testimonial/bg.png')" }}
        />
        <motion.div
          className="absolute left-[25%] top-[5%] w-48 h-48 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/1.jpg"
            alt="Team member 1"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute right-[30%] top-[10%] w-32 h-32 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/2.jpg"
            alt="Team member 2"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute left-[7%] bottom-[50%] w-40 h-40 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/3.jpg"
            alt="Team member 3"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute left-[10%] bottom-[25%] w-56 h-56 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/4.jpg"
            alt="Team member 4"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="absolute right-[9%] bottom-[28%] w-56 h-56 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/5.jpg"
            alt="Team member 4"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="absolute right-[15%] bottom-[12%] w-56 h-56 lg:block hidden"
          style={{ transition: "transform 0.3s ease-out" }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <img
            src="/testimonial/6.jpg"
            alt="Team member 4"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* testimonal sldr */}
        <div className="relative mx-auto max-w-3xl text-center z-10 md:translate-y-[150px]">
          <Carousel
            className="w-full max-w-4xl mx-auto px-6 select-none"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none lg:w-[95%] bg-transparent">
                    <div className="flex flex-col items-center text-center px-4 py-8 md:px-8 md:py-12  ">
                      <ImQuotesLeft className="w-16 h-16 mb-8 text-black" />
                      <p className="text-lg md:text-xl lg:text-2xl italic mb-8 leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl tracking-wide">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm text-muted-foreground tracking-wider">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 ">
              <CarouselPrevious className="relative rounded-full h-12 w-12 hover:bg-black hover:text-white -mr-8" />
              <CarouselNext className="relative rounded-full h-12 w-12 hover:bg-black hover:text-white -ml-8" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
