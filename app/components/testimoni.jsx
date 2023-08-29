"use client";
import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";

export default function Testimoni() {
  return (
    <div className="bg-tersierbase h-[600px] overflow-hidden">
      <section className="mt-20 flex justify-center container px-8 mx-auto  ">
        <div className="w-6/12 py-[100px]">
          <Heading
            tag={"Trusted By 2.9K+ Students"}
            judul={
              <span className="text-[#fff]">
                {" "}
                Pengalaman Luar Biasa di Level-Up🚀
              </span>
            }
            align={"sm:text-start"}
          />
          <p className="-mt-6 text-[#fff]">
            Kisah sukses students Level-Up Bagaimana dapat meningkatkan Skills &
            membantu meraih tujuan Mereka
          </p>
          <button className="text-[#fff]">Selengkapnya</button>
        </div>
        <div className="w-6/12 grid grid-cols-2 py-4 space-x-8">
          <motion.div
            animate={{ transform: "translateY(-510px)" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-full space-y-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-[#fff] rounded-2xl h-[150px]"
                >
                  <h4 className="text-xl font-bold">Always to Update</h4>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            animate={{ transform: "translateY(510px)" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-full space-y-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-[#fff] rounded-2xl h-[150px]"
                >
                  <h4 className="text-xl font-bold">Always to Update</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
