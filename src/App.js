import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Soon from "./pages/ComingSoon";

function App() {
  return (
    <div className="w-full overflow-hidden block">
      <Navbar logo={logo}></Navbar>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/pengurus" element={<Soon page="Pengurus" />} />
          <Route path="/tentang-kami" element={<Soon page="Tentang Kami" />} />
          <Route path="/artikel" element={<Soon page="Artikel" />} />
          <Route path="/kegiatan" element={<Soon page="Kegiatan" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
