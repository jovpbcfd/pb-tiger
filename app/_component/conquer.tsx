"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { data } from "@/data/conquer";
import Image from "next/image";

export default function Conquer() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".step");
      let currentStep = 1;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentStep = index + 1;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-6xl mx-auto text-white md:p-0 lg:sections-gutter-y">
      <div className="md:mt-5">
        <div className="relative w-full p-0 md:p-6 md:mt-4">
          <div className="relative flex flex-col w-full">
            <div className="hidden absolute top-0 bottom-0 left-[50%] w-[2px] bg-[#5E69E4] lg:flex"></div>
            {data.map((step) => (
              <motion.div
                key={step.id}
                className={cn(
                  "relative flex flex-col items-stretch gap-4 step py-8 md:py-12 lg:flex-row",
                  activeStep === step.tag ? "font-[400]" : "text-gray-500"
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeStep === step.tag ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full md:w-[45%] flex items-center justify-center">
                  <div className="w-full h-full text-black rounded-md border-dashed flex items-center justify-center">
                    <Image
                      src={step.path}
                      width={400}
                      height={200}
                      alt={step.title}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                <div className="hidden relative lg:flex lg:flex-col lg:items-center lg:my-auto w-[10%]">
                  <div
                    className={cn(
                      "z-10 w-8 h-8 flex items-center justify-center border-2 transform rotate-45 transition-all",
                      activeStep === step.tag
                        ? "bg-[#5E69E4] text-white border-[#5E69E4] font-bold"
                        : "bg-[#5E69E4]/90 text-white/90 border-[#5E69E4]"
                    )}
                  ></div>
                </div>

                <div className="w-full md:w-[45%] flex flex-col items-start lg:my-auto">
                  <h3 className="text-md text-white uppercase font-bold text-center md:text-left md:font-[800] md:text-[24px]/8">
                    {step.title}
                  </h3>
                  <p className="text-justify text-black text-pretty text-white md:mt-4 lg:text-[18px]/6">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
