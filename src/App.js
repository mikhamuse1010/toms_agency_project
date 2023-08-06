import Navbar from "./Contents/Navbar";
import Home from "./Contents/Home";
import Services from "./Contents/Services";
import React from 'react';
import AboutUs from "./Contents/AboutUs";
import OurWork from "./Contents/OurWork";
// import Footer from "./Contents/Footer";
// import Testimonial from "./Contents/Testimonial";

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

      {/* <Testimonial /> */}

      {/* <Footer /> */}

      <Navbar />
    </div>
  );
}

export default App;
