import { useContactsContext } from "../hooks/useContactsContext";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import PropTypes from "prop-types";

export default function NewContact({ setIsOpen }) {
  const { dispatch } = useContactsContext();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      position: "",
      email: "",
      location: "",
      phoneNumber: "",
      notes: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      company: Yup.string().required("Required"),
      position: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const contact = {
        name: values.name,
        company: values.company,
        position: values.position,
        email: values.email,
        location: values.location,
        phoneNumber: values.phoneNumber,
        notes: values.notes,
      };

      const response = await fetch("api/contacts", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        formik.resetForm();
        setIsOpen(false);
        const json = await response.json();
        dispatch({ type: "ADD_CONTACT", payload: json });
      } else {
        setError("Error creating contact");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="name" className="w-60">
              Name
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-sm text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="company" className="w-60">
              Company
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="company"
                type="text"
                name="company"
                placeholder="Google"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company ? (
                <div className="text-sm text-red-500">
                  {formik.errors.company}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="position" className="w-60">
              Position
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="position"
                type="text"
                name="position"
                placeholder="Software Engineer"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
              />
              {formik.touched.position && formik.errors.position ? (
                <div className="text-sm text-red-500">
                  {formik.errors.position}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="email" className="w-60">
              Email
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="location" className="w-60">
              Location
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="location"
                type="text"
                name="location"
                placeholder="San Francisco, CA"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location ? (
                <div className="text-sm text-red-500">
                  {formik.errors.location}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="phoneNumber" className="w-60">
              Phone Number
            </label>
            <div className="flex w-full flex-col">
              <input
                className="rounded border border-primary px-4 py-2"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="123-456-7890"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-sm text-red-500">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b py-3">
            <label htmlFor="notes" className="w-60">
              Notes
            </label>
            <div className="flex w-full flex-col">
              <textarea
                className="rounded border border-primary px-4 py-2"
                id="notes"
                type="text"
                name="notes"
                placeholder="Notes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.notes}
              />
              {formik.touched.notes && formik.errors.notes ? (
                <div className="text-sm text-red-500">
                  {formik.errors.notes}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="h-min rounded bg-secondary p-2 font-semibold text-white"
        >
          Submit
        </button>
      </form>
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
}

NewContact.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
