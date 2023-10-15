import React from "react";
import { useState } from "react";

const initialFormData = Object.freeze({
  id: "",
  title: "",
  description: "",
  transports: "",
  location: "",
  img: "/images/placeholder.png", /* Default option to add an image, any other image should be on this folder */
  type: "festivais", /* Default type, to make sure we don't add anything without a type */
});

const EventsForm = ({ onFormSubmit }) => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const value =
      e.target.name === "id"
        ? parseInt(e.target.value, 10)
        : e.target.value.trim();
    updateFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    updateFormData(initialFormData); // Clear form after submission
  };

  return (
    <>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Transports:
        <input
          type="text"
          name="transports"
          value={formData.transports}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Img. Source:
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Type of Event:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="festivais">Festivais</option>
          <option value="arraiais">Arraiais</option>
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default EventsForm;
