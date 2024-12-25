import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import FadeB from "../animated/FadeB";
import FadeT from "../animated/FadeT";
import AnimatedButton from "../animated/AnimatedButton";

export default function Pricing() {
  return (
    <div className="bg-[#f3ecec]">
      <div className="container mx-auto md:w-[85%] py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <FadeB className="text-gray-700">Pricing Table</FadeB>
            <FadeB className="text-4xl font-bold sm:text-5xl md:text-6xl">
              BE KIND TO YOUR MIND
            </FadeB>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Design should enrich our day
                </AccordionTrigger>
                <AccordionContent>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Bring their individual experience and creative
                </AccordionTrigger>
                <AccordionContent>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Human centred design to challenges
                </AccordionTrigger>
                <AccordionContent>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Design should enrich our day
                </AccordionTrigger>
                <AccordionContent>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Developing core web applications
                </AccordionTrigger>
                <AccordionContent>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-6">
            <FadeB>
              <Card className="relative bg-black text-white">
                <Badge className="absolute right-4 top-4 bg-[#FF9B82] text-black hover:bg-[#FF9B82]/90">
                  BEST VALUE
                </Badge>
                <CardHeader className="pb-8 pt-12">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 px-4 py-1 text-sm">
                      YEARLY
                    </span>
                    <div className="text-right">
                      <span className="text-4xl font-bold">$129</span>
                      <span className="text-2xl">.99</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-[#FF9B82] p-0.5">
                      <FaCheck className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-2xl font-semibold">14 DAYS FREE</span>
                  </div>
                  <p className="text-white/60">
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </CardContent>
              </Card>
            </FadeB>

            {/* Monthly Plan */}
            <FadeT>
              <Card className="border-2 mb-5">
                <CardHeader className="pb-8 pt-12">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-black/20 px-4 py-1 text-sm">
                      MONTHLY
                    </span>
                    <div className="text-right">
                      <span className="text-4xl font-bold">$12</span>
                      <span className="text-2xl">.99</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded border border-black/20 p-0.5">
                      <FaCheck className="h-4 w-4" />
                    </div>
                    <span className="text-2xl font-semibold">7 DAYS FREE</span>
                  </div>
                  <p className="text-black/60">
                    Subscription fee is $12.99 USD and automatically renews each
                    year.
                  </p>
                </CardContent>
              </Card>
              <AnimatedButton>
                Try it <br />
                Free now
              </AnimatedButton>
            </FadeT>
          </div>
        </div>
      </div>
    </div>
  );
}
