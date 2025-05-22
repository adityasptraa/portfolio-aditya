import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <>
      <div className="scroll-smooth overflow-x-hidden dark:text-neutral-100 antialiased selection:bg-slate-600 selection:text-slate-300">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-50 dark:bg-neutral-950" />
          <div className="absolute top-0 left-0 z-[-1] h-[120vh] w-[120vw] bg-[radial-gradient(ellipse_80%_80%_at_20%_100%,rgba(22,33,117,0.5),rgba(0,0,0,0))] opacity-90" />
        </div>
        <Navbar />
        <div className="container mx-auto mt-10 lg:mt-20">
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Certificates />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
