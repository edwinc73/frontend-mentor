import "./App.css";
import Rating from "./components/Rating";

function App() {
  return (
    <>
      <main>
        <section>
          <Rating></Rating>
        </section>
      </main>
      <footer>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/edwinc73" target="_blank">
            Edwin Cheng
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
