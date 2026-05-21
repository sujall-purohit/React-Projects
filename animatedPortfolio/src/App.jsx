import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
