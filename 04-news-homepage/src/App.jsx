import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
