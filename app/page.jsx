/* eslint-disable @next/next/no-img-element */
import { listSoftware } from "@/lib/data";
import CategorySection from "./category-section";
import Header from "./components/header";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <Header />
      <CategorySection />
      <section className="mt-20  ">
        <Marquee className=" pb-10 " pauseOnHover={true}>
          {listSoftware.map((item, index) => (
            <div
              key={index}
              className="flex px-3 gap-4 items-center border-2 border-white w-[300px] py-4 rounded-2xl  mx-4 bg-[#fff] shadow-sm  cursor-pointer
              hover:border-prime hover:border-2 transition-all box-border h-auto"
            >
              <div className="w-[72px]">{item.img}</div>
              <div>
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-deep/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
