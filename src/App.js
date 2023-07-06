import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Soon from "./pages/ComingSoon";
import Footer from "./components/Footer";
import Pengurus from "./pages/Pengurus";

function App() {
  return (
    <div className="w-full">
      <Navbar logo={logo} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/tentang-kami" element={<Soon page="Tentang Kami" />} />
          <Route path="/artikel" element={<Soon page="Artikel" />} />
          <Route path="/kegiatan" element={<Soon page="Kegiatan" />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
