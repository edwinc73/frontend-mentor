import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 922) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="container">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}></Nav>
      </header>
      <main>
        <Hero></Hero>
        <ArticleList></ArticleList>
        <Overlay isOpen={isOpen}></Overlay>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
