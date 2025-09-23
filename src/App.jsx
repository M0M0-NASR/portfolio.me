import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Header />

      <main>
        <Hero />
        <Projects />
        <WorkExperience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
