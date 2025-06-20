"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const tabList = [
  {
    id: "tabOne",
    number: "01",
    title: "Automatic Expense Tracking",
  },
  {
    id: "tabTwo",
    number: "02",
    title: "Xpensease Split Modes",
  },
  {
    id: "tabThree",
    number: "03",
    title: "PayAlert & CashWise",
  },
];

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <div className="">
        <section className="relative pb-20 pt-18.5 lg:pb-22.5 px-20">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Dotted Background */}
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="hidden dark:block"
            src="/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Tab Menu */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-transparent shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {tabList.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`relative flex w-full items-center gap-4 border-b border-stroke px-6 py-2 text-left last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === tab.id
                  ? "before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#8EDB05]"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  {tab.number}
                </p>
              </div>
              <span className="text-sm font-medium text-black dark:text-white xl:text-regular">
                {tab.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1154"
        >
          {featuresTabData.map((feature, index) => (
            <div
              key={feature.id}
              className={feature.id === currentTab ? "block" : "hidden"}
            >
              <FeaturesTabItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default FeaturesTab;
