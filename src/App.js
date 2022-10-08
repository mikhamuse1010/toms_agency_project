import Navbar from "./Contents/Components/Navbar";
import Home from "./Contents/Home";
import WWD from "./Contents/WWD";

export const SpaceContainer = () => (
  <div className={`my-[150px]`} />
)

function App() {

  return (
    <div id="App" className="overflow-y-auto overflow-x-hidden">
      <Home />

      <SpaceContainer />

      <WWD />

      <Navbar />
    </div>
  );
}

export default App;
