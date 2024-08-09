import heroImage from "../assets/images/image-web-3-desktop.jpg";
import NewsList from "./NewsList";

export default function Hero() {
  return (
    <section id="hero-section" className="container">
      <div className="row">
        <article className="col-12 col-lg-8 pr-3">
          <img
            src={heroImage}
            className="img-fluid"
            alt="geometric shapes fitting within a dynamic grid depicting the modularity of web 3s"
          />

          <div className="row py-4">
            <div className="col-lg-6 d-flex align-items-center">
              <h1
                className="text-color-dark-blue col-10 p-0"
                style={{ marginTop: "-4px" }}
              >
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="col-12 col-lg-6">
              <p className="text-muted">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="button-primary mt-2"> Read more</button>
            </div>
          </div>
        </article>
        <NewsList></NewsList>
      </div>
    </section>
  );
}
