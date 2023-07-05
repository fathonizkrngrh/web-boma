import React from "react";
import Hero from "../components/Hero";
import TentangBoma from "../components/TentangBoma";
import Bidang from "../components/Bidang";

const Home = () => {
  const data = {
    tentangBoma:
      "Badan Olahraga mahasiswa (BOMA) merupakan Unit Kegiatan Mahasiswa yang bergerak dibidang olahraga. BOMA juga merupakan tempat bagi mahasiswa-mahasiswi dalam menyalurkan minat, bakat, dan potensinya di bidang olahraga.",
  };
  return (
    <div>
      <Hero></Hero>
      <Bidang></Bidang>
      <TentangBoma tentangBoma={data.tentangBoma}></TentangBoma>
    </div>
  );
};

export default Home;
