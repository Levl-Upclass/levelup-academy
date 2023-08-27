import HeaderImg from "@/public/img/header.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mt-[-300px] text-white h-[1300px] w-full bg-contain bg-top bg-[url('../public/img/background.png')]">
      <div className="pt-[400px] container lg:px-8 mx-auto">
        <div className="flex  max-md:flex-wrap max-md:space-y-2 ">
          <h1 className=" font-bold leading-relaxed  md:leading-[150%] md:text-6xl text-5xl -mt-4 md:w-8/12  ">
            Ayo Tingkatkan Keahlian Kamu Disini!
          </h1>
          <p className=" text-sm leading-relaxed md:w-4/12 text-white/80 ">
            Bersiaplah untuk dunia kerja dengan terus belajar dan berlatih
            konsisten. Pilih kelas sesuai minat, tingkatkan keterampilan Anda.
            #BelajarKapanSaja
          </p>
        </div>
        <div className="mt-10 w-full h-[460px] rounded-[24px] overflow-hidden">
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
            <h3 className="text-6xl font-bold">10K+</h3>
            <p className="text-lg text-white/60">Success Stories</p>
          </div>
          <div className="space-y-2 w-3/12  text-center border-white border-x-2">
            <h3 className="text-6xl font-bold">168+</h3>
            <p className="text-lg text-white/60">Expert Mentors</p>
          </div>
          <div className="space-y-2 w-3/12  text-center border-white border-r-2">
            <h3 className="text-6xl font-bold">24K+</h3>
            <p className="text-lg text-white/60">Total Course</p>
          </div>
          <div className="space-y-2 w-3/12  text-center ">
            <h3 className="text-6xl font-bold">500+</h3>
            <p className="text-lg text-white/60">Worldwide Students</p>
          </div>
        </div>
      </div>
    </main>
  );
}
