import AboutUs from "./Contents/AboutUs";
import Navbar from "./Contents/Navbar";
import Footer from "./Contents/Footer";
import Home from "./Contents/Home";
import OurWork from "./Contents/OurWork";
import Testimonial from "./Contents/Testimonial";
import Services from "./Contents/Services";

export const SpaceContainer = () => <div className={`my-[150px]`} />;

function App() {
  return (
    <div id="App" className="overflow-hidden">
      <Home />

      <SpaceContainer />

      <Services />

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
