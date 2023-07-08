import React from "react";
import Hero from "../components/Hero";
import SectionTentangBoma from "../components/SectionTentangBoma";
import Bidang from "../components/SectionBidang";

import heroImage from "../assets/landingPage/landing.png";
const Home = () => {
  const data = {
    tentangBoma:
      "Badan Olahraga mahasiswa (BOMA) merupakan Unit Kegiatan Mahasiswa yang bergerak dibidang olahraga. BOMA juga merupakan tempat bagi mahasiswa-mahasiswi dalam menyalurkan minat, bakat, dan potensinya di bidang olahraga.",
  };
  return (
    <div>
      <Hero
        title="UPI KAMPUS CIBIRU"
        subtitle="Official Website"
        img={true}
      ></Hero>
      <div className="z-10 mt-2 w-full ">
        <img
          className=" object-cover w-full min-h-[200px]"
          src={heroImage}
          alt="hero"
        />
      </div>
      <Bidang></Bidang>
      <SectionTentangBoma tentangBoma={data.tentangBoma}></SectionTentangBoma>
    </div>
  );
};

export default Home;
