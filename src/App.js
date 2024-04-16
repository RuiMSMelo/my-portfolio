import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Tesla from "./pages/projects/tesla";
import Soundspace from "./pages/projects/soundspace";
import Bookzone from "./pages/projects/bookzone";
import Sharkattack from "./pages/projects/sharkattack";
import Pluginflow from "./pages/projects/pluginflow";
import ClothesStore from "./pages/projects/clothesstore";
import HomepageES from "./pagesES/HomepageES";
import Sobre from "./pagesES/Sobre";
import Proyectos from "./pagesES/Proyectos";
import Contactame from "./pagesES/Contactame";

function App() {
  return (
    <Routes>
      {/* english routes here: */}
      <Route path="/en" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/tesla" element={<Tesla />} />
      <Route path="/soundspace" element={<Soundspace />} />
      <Route path="/bookzone" element={<Bookzone />} />
      <Route path="/sharkattack" element={<Sharkattack />} />
      <Route path="/pluginflow" element={<Pluginflow />} />
      <Route path="/clothesstore" element={<ClothesStore />} />
      {/* spanish routes here: */}
      <Route path="/es" element={<HomepageES />} />
      <Route path="/es/sobre" element={<Sobre />} />
      <Route path="/es/proyectos" element={<Proyectos />} />
      <Route path="/es/contactame" element={<Contactame />} />
      {/* <Route path="/es/tesla" element={<Tesla />} />
      <Route path="/es/soundspace" element={<Soundspace />} />
      <Route path="/es/bookzone" element={<Bookzone />} />
      <Route path="/es/sharkattack" element={<Sharkattack />} />
      <Route path="/es/pluginflow" element={<Pluginflow />} />
      <Route path="/es/clothesstore" element={<ClothesStore />} /> */}
    </Routes>
  );
}

export default App;
