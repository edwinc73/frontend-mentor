import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row mx-auto">
            <forms className="rounded bg-white col-12 p-3">
              <h2 className="fw-bold">Contact Us</h2>
              <label htmlFor="first-name">
                First Name <span className="text-green">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="first-name"
                required
                className="form-control"
              />
              <label htmlFor="last-name">
                Last Name <span className="text-green">*</span>
              </label>
              <input
                type="text"
                id="lastname"
                name="last-name"
                required
                className="form-control"
              />
            </forms>
            Contact Us First Name This field is required Last Name This field is
            required Email Address Please enter a valid email address This field
            is required Query Type General Enquiry Support Request Please select
            a query type Message This field is required I consent to being
            contacted by the team To submit this form, please consent to being
            contacted Submit Message Sent! Thanks for completing the form. We'll
            be in touch soon!
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
