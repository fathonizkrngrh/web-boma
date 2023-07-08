import React from "react";
import Hero from "../components/Hero";
import SectionVisiMisi from "../components/SectionVisiMisi";
import SectionFilosofiLogo from "../components/SectionFilosofiLogo";
import SectionInstagram from "../components/SectionInstagram";

const TentangKami = () => {
  return (
    <div>
      <Hero title="TENTANG KAMI" subtitle="Mengenal Lebih Dekat" />
      <SectionVisiMisi />
      <SectionFilosofiLogo />
      <SectionInstagram />
    </div>
  );
};

export default TentangKami;
