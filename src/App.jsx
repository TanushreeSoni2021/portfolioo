import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#f5ede0", overflowX: "hidden" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
