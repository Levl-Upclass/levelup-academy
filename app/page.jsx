/* eslint-disable @next/next/no-img-element */
import CategorySection from "./components/category-section";
import Header from "./components/header";
import ListSoftware from "./components/listSoftware";
import Testimoni from "./components/testimoni";

export default function Home() {
  return (
    <>
      <Header />
      <CategorySection />
      <ListSoftware />
      <Testimoni />
    </>
  );
}
