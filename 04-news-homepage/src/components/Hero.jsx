import heroImage from "../assets/images/image-web-3-desktop.jpg";
import NewsList from "./NewsList";

export default function Hero() {
  return (
    <section id="hero-section" className="container">
      <div className="row">
        <article className="col-8">
          <img
            src={heroImage}
            className="img-fluid"
            alt="geometric shapes fitting within a dynamic grid depicting the modularity of web 3s"
          />

          <div className="row">
            <div className="col">
              <h1> The Bright Future of Web 3.0?</h1>
            </div>
            <div className="col">
              <p className="text-muted">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="btn btn-primary"> Read more</button>
            </div>
          </div>
        </article>
        <NewsList></NewsList>
      </div>
    </section>
  );
}
