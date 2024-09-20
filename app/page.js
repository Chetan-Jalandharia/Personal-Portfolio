import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/ProjectSection";
import Contact from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-8 lg:px-12 pt-24">
        <Header />
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
