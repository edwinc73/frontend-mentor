import { useFormik } from "formik";
import { useEffect } from "react";
import { object, string, bool } from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  type: "",
  message: "",
  agree: false,
};

export default function ContactUs({ setSent }) {
  const formik = useFormik({
    initialValues,
    validationSchema: object({
      firstName: string().required("This field is required"),
      lastName: string().required("This field is required"),
      email: string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address"),
      type: string().required("Please select a query type"),
      message: string().required("This field is required"),
      agree: bool().oneOf(
        [true],
        "To submit this form, please consent to being contacted"
      ),
    }),
    onSubmit: () => {
      setSent(true);
      formik.resetForm();
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit(formik.values);
  };

  return (
    <form
      className=" bg-white col-md-5 col-12 col-lg-7 mx-auto p-4 p-lg-5"
      onSubmit={handleSubmit}
      style={{
        borderRadius: "12px",
      }}
    >
      <h2 className="fw-bold text-grey2" style={{ fontSize: "2.5rem" }}>
        Contact Us
      </h2>
      <div className="row">
        <div className="col-12 col-lg-6 mt-3">
          <label className="required" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            autoComplete="given-name"
            className="form-control mt-2"
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div role="alert" className="text-error mt-2">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="col-12 col-lg-6 mt-3">
          <label className="required" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="family name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="form-control mt-2"
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div role="alert" className="text-error mt-2">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-12 mt-3">
        <label className="required" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form-control mt-2"
        />
        {formik.errors.email && formik.touched.email ? (
          <div role="alert" className="text-error mt-2">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className="form-group mt-3">
        <label className="required col-12" htmlFor="type">
          Query Type
        </label>
        <div className="row">
          <div className="col-12 col-lg-6">
            <label
              htmlFor="type1"
              className={`form-check-label ${
                formik.values.type == "General Enquiry"
                  ? "selected-label"
                  : "bordered"
              } rounded col-12 py-2 px-2 mt-2 text-grey2`}
            >
              <input
                onChange={formik.handleChange}
                value="General Enquiry"
                checked={formik.values.type === "General Enquiry"}
                type="radio"
                id="type1"
                name="type"
                className="form-check-input mx-2"
              />
              General Enquiry
            </label>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className={`form-check ${
                formik.values.type == "Support Request"
                  ? "selected-label"
                  : "bordered"
              } rounded col-12 p-0 mt-3 mt-lg-2 text-grey2`}
            >
              <label htmlFor="type2" className="form-check-label py-2 px-2">
                <input
                  onChange={formik.handleChange}
                  value="Support Request"
                  checked={formik.values.type === "Support Request"}
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
        {formik.errors.type && formik.touched.type ? (
          <div role="alert" className="text-error mt-2">
            {formik.errors.type}
          </div>
        ) : null}
      </div>
      <div className="col-12 mt-3">
        <label className="required" htmlFor="message">
          Message
        </label>
        <textarea
          onChange={formik.handleChange}
          value={formik.values.message}
          name="message"
          id="message"
          className="form-control mt-2"
          rows={3}
        ></textarea>
        {formik.errors.message && formik.touched.message ? (
          <div role="alert" className="text-error mt-2">
            {formik.errors.message}
          </div>
        ) : null}{" "}
      </div>
      <div className="col-12 mt-3">
        <label className="required align-middle" htmlFor="agree">
          <input
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.agree}
            value={!formik.values.agree}
            name="agree"
            id="agree"
            className="formcheck-input me-3 align-middle"
          />
          I hereby consent to being contacted by the team{" "}
        </label>
        {formik.errors.agree && formik.touched.agree ? (
          <div role="alert" className="text-error mt-1">
            {formik.errors.agree}
          </div>
        ) : null}
      </div>
      <button type="submit" className="button bg-green text-white col-12 mt-4">
        Submit
      </button>
    </form>
  );
}
