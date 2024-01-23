import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function NewContact() {
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

      const data = await response.json();

      if (!data.ok) {
        setError(data.error);
      } else {
        setError(null);
        console.log("Contact added!");
        formik.resetForm();
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit;
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
        />
        {formik.touched.company && formik.errors.company ? (
          <div>{formik.errors.company}</div>
        ) : null}

        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.position}
        />
        {formik.touched.position && formik.errors.position ? (
          <div>{formik.errors.position}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />
        {formik.touched.location && formik.errors.location ? (
          <div>{formik.errors.location}</div>
        ) : null}

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}

        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          type="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.notes}
        />

        <button type="submit">Submit</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
