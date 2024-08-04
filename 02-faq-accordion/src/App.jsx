import "./App.css";
import Faq from "./pages/faq/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="">
        <div id="bg-image" className="w-100"></div>
        <section id="faq-section">
          <Faq></Faq>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
