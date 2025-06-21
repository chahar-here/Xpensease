"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-24 mb-10">
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden text-center">
        <h1 className="font-medium text-4xl uppercase dark:text-white mb-16">
                How Xpensease Was <span className="text-[#8EDB05]">Born?</span></h1>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="md:flex items-center gap-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className=" hidden animate_left relative mx-auto aspect-[588/526.5] lg:block lg:w-1/2"
            >
              <Image
                src="/about/about-dark-01.png"
                alt="About"
                fill
              />
            </motion.div>
            {/* Content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full lg:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              I'm
              <span className="text-[#8EDB05]"> Yash Khandelwal</span>, CEO and Founder of Xpensease.
              </h2>
              <p>
              The idea for Xpensease sparked on February 11th, while I was traveling alone by train — just a day after my 24th birthday.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                  <p>That day, I was trying to recall everything I had spent the previous day — clothes, shoes, travel, food, and a party with friends and family. But I had paid through so many different methods: UPI, credit card, debit card, Amazon Pay, and even cash.
                  Despite being my own money, I couldn’t track it clearly — there was no single place to see everything at once.</p>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                  <p>That frustration turned into a vision — to create a smart, automatic expense tracker that pulls together all your digital and cash transactions, categorizes them, and gives you a clear, real-time view of your spending.</p>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                  <p>
                  And that’s how Xpensease was born — out of a personal need, for anyone who wants to take control of their finances effortlessly.
                  </p>
                  </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
