import React from "react";
import { useState } from "react";

const initialFormData = Object.freeze({
  id: "",
  title: "",
  description: "",
  transports: {
    rodeste: "",
    giro: "",
    SAM: "",
  },
  location: "",
  img: "/images/placeholder.png",
  type: "festivais",
  date: "",
  spotify: {
    spotify1: "",
    spotify2: "",
    spotify3: "",
  },
  gallery: "/images/gallery/summeropening/",
  cartazSource: "/images/placeholder.png",
});

const EventsForm = ({ onFormSubmit, events, setEvents }) => {
  const [formData, updateFormData] = useState(initialFormData);

  // Export events to JSON
  const handleExportToJson = () => {
    const blob = new Blob([JSON.stringify(events)], {
      type: "application/json",
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "events.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Import events from JSON
  const handleImportFromJson = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      try {
        const importedEvents = JSON.parse(text);
        if (Array.isArray(importedEvents)) {
          setEvents(importedEvents);
        } else {
          alert("Invalid JSON file format.");
        }
      } catch (error) {
        alert("Error parsing JSON: " + error);
      }
    }
  };

  const handleChange = (e) => {
    const targetName = e.target.name;
    let value = e.target.value;

    // Handle nested object changes
    if (targetName.includes(".")) {
      const parts = targetName.split(".");
      value = {
        ...formData[parts[0]],
        [parts[1]]: value,
      };

      updateFormData((prevState) => ({
        ...prevState,
        [parts[0]]: value,
      }));
    } else {
      updateFormData({
        ...formData,
        [targetName]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    updateFormData(initialFormData); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <label>
        RODESTE Transport:
        <input
          type="text"
          name="transports.rodeste"
          value={formData.transports.rodeste}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        GIRO Transport:
        <input
          type="text"
          name="transports.giro"
          value={formData.transports.giro}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        SAM Transport:
        <input
          type="text"
          name="transports.SAM"
          value={formData.transports.SAM}
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
      <label>
        Event Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Spotify 1:
        <input
          type="text"
          name="spotify.spotify1"
          value={formData.spotify.spotify1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Spotify 2:
        <input
          type="text"
          name="spotify.spotify2"
          value={formData.spotify.spotify2}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Spotify 3:
        <input
          type="text"
          name="spotify.spotify3"
          value={formData.spotify.spotify3}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gallery Path:
        <input
          type="text"
          name="gallery"
          value={formData.gallery}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Cartaz Source:
        <input
          type="text"
          name="cartazSource"
          value={formData.cartazSource}
          onChange={handleChange}
        />
      </label>
      <div className="buttonContainer">
        <button type="button" onClick={handleExportToJson}>Export to JSON</button>
        <input
            type="file"
            id="fileInput"
            onChange={handleImportFromJson}
            accept=".json"
            className="hideFileInput"
        />
        <label htmlFor="fileInput" className="fileInputLabel">Import from JSON</label>
        <button type="submit">Add Event</button>
      </div>
    </form>
  );
};

export default EventsForm;
