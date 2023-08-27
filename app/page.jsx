import HeaderImg from "@/public/img/header.jpg";
import IconDesign from "@/public/img/course-design.svg";
import IconCoding from "@/public/img/course-coding.svg";
import IconImprovement from "@/public/img/course-improvement.svg";
import IconIndustries from "@/public/img/course-industries.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { categoryClass } from "@/lib/data";
import Heading from "./components/heading";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../public/img/background.png')] bg-contain bg-top h-[1250px] ">
        <div className="container lg:px-8 mx-auto px-8   ">
          <main className=" mt-[-300px] text-white  w-full ">
            <div className="sm:pt-[380px] pt-[350px] ">
              <div className="flex gap-4  max-lg:flex-wrap ">
                <h1 className=" sm:leading-relaxed leading-normal tracking-wide md:leading-[150%] md:text-6xl max-sm:text-center text-5xl -mt-4 lg:w-8/12 w-full   ">
                  Ayo{" "}
                  <span className="bg-search max-md:bg-none pb-4">
                    Tingkatkan
                  </span>{" "}
                  Keahlian Kamu Disini!
                </h1>
                <div className=" lg:w-4/12 w-full space-y-4">
                  <p className=" text-sm leading-relaxed text-white/80 max-sm:text-center ">
                    Bersiaplah untuk dunia kerja dengan terus belajar dan
                    berlatih konsisten. Pilih kelas sesuai minat, tingkatkan
                    keterampilan Anda.
                    <span className="font-bold"> #BelajarKapanSaja</span>
                  </p>
                  <div className="grid grid-cols-2 items-center w-[400px] gap-4 ">
                    <button className="px-4 bg-second rounded-full text-deep font-bold py-3">
                      Daftar Sekarang!
                    </button>
                    <a href="#" className="text-white ">
                      <span className="font-medium underline underline-offset-2">
                        Lihat Seluruh Kelas
                      </span>{" "}
                      ✨
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full h-[460px] rounded-[24px] overflow-hidden max-sm:hidden">
                <Image
                  src={HeaderImg}
                  alt="header"
                  className="w-full h-auto mt-[-120px]"
                  quality={95}
                  priority
                />
              </div>
              <div className="mt-10 flex  justify-center ">
                <div className="space-y-2 w-3/12  ">
                  <h3 className="text-6xl tracking-wider ">7K+</h3>
                  <p className="text-lg text-white/60">Sukses Stories</p>
                </div>
                <div className="space-y-2 w-3/12  text-center border-white border-x-2">
                  <h3 className="text-6xl  tracking-wider">1.3K+</h3>
                  <p className="text-lg text-white/60">Akses Terjual</p>
                </div>
                <div className="space-y-2 w-3/12  text-center border-white border-r-2">
                  <h3 className="text-6xl  tracking-wider">127+</h3>
                  <p className="text-lg text-white/60">Materi</p>
                </div>
                <div className="space-y-2 w-3/12  text-center ">
                  <h3 className="text-6xl tracking-wider ">Free</h3>
                  <p className="text-lg text-white/60">Update Materi</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <section className="container px-8 mx-auto mt-20">
        <Heading
          tag={"Start Learning Today"}
          judul={`Kelas Online Design,
        Development, \n Industries dan Freelancer`}
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-col-4 grid-cols-1 max-sm:gap-y-4 md:gap-4 ">
          {categoryClass.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff] shadow-sm rounded-xl flex flex-col space-y-10 px-6 py-5 "
            >
              <Image src={item.icon} alt="icon" className="w-[75px]" />
              <div className="flex items-center w-full justify-between">
                <div>
                  <h4 className="font-extrabold text-xl">{item.name}</h4>
                  <p className="text-deep/60">{item.desc}</p>
                </div>
                <IoIosArrowForward size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
