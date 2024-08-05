import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <form
              onSubmit={handleSubmit}
              className="rounded bg-white col-12 col-md-6 mx-auto p-3 needs-validation"
              noValidate
            >
              <h2 className="fw-bold">Contact Us</h2>
              <div className="row">
                <div className="col-12 col-md-6 mt-3">
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
                  <div className="invalid-feedback">This field is required</div>
                </div>
                <div className="col-12 col-md-6 mt-3">
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
                  <div className="invalid-feedback">This field is required</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="email">
                  Email Address <span className="text-green">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-control"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="type" className="col-12">
                  Query Type <span className="text-green">*</span>
                </label>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-check border rounded py-2 px-3 col-12">
                      <label htmlFor="type1" className="form-check-label">
                        <input
                          required
                          type="radio"
                          id="type1"
                          name="type"
                          className="form-check-input mx-2"
                        />
                        General Enquiry
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-check border rounded py-2 px-3 col-12">
                      <label htmlFor="type2" className="form-check-label">
                        <input
                          required
                          type="radio"
                          id="type2"
                          name="type"
                          className="form-check-input mx-2"
                        />
                        Support Request
                      </label>
                    </div>
                  </div>
                </div>
                <div className="invalid-feedback">
                  Please select a query type
                </div>
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="message">
                  Message <span className="text-green">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={3}
                  required
                ></textarea>
                <div className="invalid-feedback">This field is required</div>
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="agree">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className="formcheck-input"
                    required
                  />
                  I consent to being contacted by the team{" "}
                  <span className="text-green">*</span>
                </label>
              </div>
              <button type="submit" className="bg-green text-white col-12 mt-4">
                Submit
              </button>
            </form>
            {/* Contact Us First Name This field is required Last Name This field is
            required Email Address Please enter a valid email address This field
            is required Query Type General Enquiry Support Request Please select
            a query type Message This field is required I consent to being
            contacted by the team To submit this form, please consent to being
            contacted Submit Message Sent! Thanks for completing the form. We'll
            be in touch soon! */}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
