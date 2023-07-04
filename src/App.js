import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import logo from "./assets/logo/logo.png";

function App() {
  // const data = {
  //   hero: {
  //     appType: "Food app",
  //     tagLine: "Why stay hungry when you can order from Bella Onojie",
  //     description: "Download the bella onoje’s food app now on",
  //     mainActionText: "Playstore",
  //     extraActionText: "App Store",
  //   },
  // };
  return (
    <div className="App">
      <NavBar logo={logo}></NavBar>
      <Hero></Hero>
      {/* <div className="h-[1000px] bg-main"></div> */}
    </div>
  );
}

export default App;
