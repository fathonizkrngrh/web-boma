import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import logo from "./assets/logo/logo.png";
import TentangBoma from "./components/TentangBoma";

function App() {
  const data = {
    tentangBoma:
      "Badan Olahraga mahasiswa (BOMA) merupakan Unit Kegiatan Mahasiswa yang bergerak dibidang olahraga. BOMA juga merupakan tempat bagi mahasiswa-mahasiswi dalam menyalurkan minat, bakat, dan potensinya di bidang olahraga.",
  };
  return (
    <div className="App">
      <NavBar logo={logo}></NavBar>
      <Hero></Hero>
      <TentangBoma tentangBoma={data.tentangBoma}></TentangBoma>
      <div className="h-[1000px] bg-main"></div>
    </div>
  );
}

export default App;
