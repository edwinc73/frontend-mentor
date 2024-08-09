import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="container">
        <Nav></Nav>
      </header>
      <main>
        <Hero></Hero>
        <ArticleList></ArticleList>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
