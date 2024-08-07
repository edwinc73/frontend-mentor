import { FormikContext, useFormik } from "formik";
import { useEffect, useState } from "react";
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
    onSubmit: (values) => {
      setSent(true);
      formik.resetForm();
    },
  });

  useEffect(() => {
    console.log(formik.touched);
  }, [formik]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit(formik.values);
  };

  return (
    <form
      className="rounded bg-white col-12 col-md-6 mx-auto p-3 p-md-4"
      onSubmit={handleSubmit}
    >
      <h2 className="fw-bold">Contact Us</h2>
      <div className="row">
        <div className="col-12 col-md-6 mt-3">
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
            className="form-control mt-1"
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div role="alert" className="text-error mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="col-12 col-md-6 mt-3">
          <label className="required" htmlFor="last-name">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastName"
            autoComplete="family name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="form-control mt-1"
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div role="alert" className="text-error mt-1">
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
          className="form-control"
        />
        {formik.errors.email && formik.touched.email ? (
          <div role="alert" className="text-error mt-1">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className="form-group mt-3">
        <label className="required col-12" htmlFor="type">
          Query Type
        </label>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-check radio-label border rounded py-2 px-3 col-12">
              <label htmlFor="type1" className="form-check-label ">
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
          </div>
          <div className="col-12 col-md-6">
            <div className="form-check radio-label border rounded py-2 px-3 col-12">
              <label htmlFor="type2" className="form-check-label ">
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
          <div role="alert" className="text-error mt-1">
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
          className="form-control"
          rows={3}
        ></textarea>
        {formik.errors.message && formik.touched.message ? (
          <div role="alert" className="text-error mt-1">
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
