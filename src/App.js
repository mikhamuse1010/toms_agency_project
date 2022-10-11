import AboutUs from "./Contents/AboutUs";
import Navbar from "./Contents/Components/Navbar";
import Home from "./Contents/Home";
import OurWork from "./Contents/OurWork";
import WWD from "./Contents/WWD";

export const SpaceContainer = () => (
  <div className={`my-[150px]`} />
)

function App() {

  return (
    <div id="App" className="overflow-hidden">
      <Home />

      <SpaceContainer />

      <WWD />

      <AboutUs />

      <SpaceContainer />

      <OurWork />

      <Navbar />
    </div>
  );
}

export default App;
