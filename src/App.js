import AboutUs from "./Contents/AboutUs";
import Navbar from "./Contents/Navbar";
import Footer from "./Contents/Footer";
import Home from "./Contents/Home";
import OurWork from "./Contents/OurWork";
import Testimonial from "./Contents/Testimonial";
import WWD from "./Contents/WWD";

export const SpaceContainer = () => <div className={`my-[150px]`} />;

function App() {
  return (
    <div id="App" className="overflow-hidden">
      <Home />

      <SpaceContainer />

      <WWD />

      <AboutUs />

      <SpaceContainer />

      <OurWork />

      <Testimonial />

      <Footer />

      <Navbar />
    </div>
  );
}

export default App;
