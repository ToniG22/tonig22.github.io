import React, { useState, useEffect } from "react";

const initialFormData = Object.freeze({
  id: "",
  title: "",
  description: "",
  transports: {
    rodeste: "",
    giro: "",
    SAM: "",
  },
  location: "Funchal",
  location2: "",
  img: "/images/placeholder.png",
  type: "festivais",
  beginDate: "",
  endDate: "",
  spotify: [],
  gallery: "/images/gallery/summeropening/",
  cartazSource: "/images/placeholder.png",
  siteUrl: ""
});

const EventsForm = ({
  onFormSubmit,
  events,
  setEvents,
  editingEvent,
  setEditingEvent,
}) => {
  const [formData, updateFormData] = useState(initialFormData);

  // If there's an editing event, populate form data with its values
  useEffect(() => {
    if (editingEvent) {
      updateFormData(editingEvent);
    } else {
      updateFormData(initialFormData);
    }
  }, [editingEvent]);

  const handleAddField = (field) => {
    updateFormData((prevState) => ({
      ...prevState,
      [field]: Array.isArray(prevState[field])
        ? [...prevState[field], ""]
        : [""],
    }));
  };

  const handleRemoveField = (field, index) => {
    updateFormData((prevState) => ({
      ...prevState,
      [field]: prevState[field].filter((_, i) => i !== index),
    }));
  };

  const handleReset = () => {
    updateFormData(initialFormData);
    if (editingEvent) setEditingEvent(null);
  };

  const handleChange = (e) => {
    const targetName = e.target.name;
    let value = e.target.value;

    // Check if the field is a date field and transform the date
    /* if (targetName === "beginDate" || targetName === "endDate") {
      const [year, month, day] = value.split("-");
      value = `${day}-${month}-${year}`;
    }
 */
    if (targetName.includes(".")) {
      const [field, index] = targetName.split(".");
      if (Array.isArray(formData[field])) {
        // Handle array fields like spotify
        value = [...formData[field]];
        value[index] = e.target.value;
      } else {
        // Handle nested object changes
        value = {
          ...formData[field],
          [index]: e.target.value,
        };
      }

      updateFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    } else {
      updateFormData((prevState) => ({
        ...prevState,
        [targetName]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    updateFormData(initialFormData); // Clear form after submission
  };

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
        Type of Event:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="festivais">Festivais</option>
          <option value="arraiais">Arraiais</option>
        </select>
      </label>
      <br />
      <label>
        Begin Date:
        <input
          type="date"
          name="beginDate"
          value={formData.beginDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Freguesia:
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="Funchal">Funchal</option>
          <option value="Ribeira Brava">Ribeira Brava</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="Câmara de Lobos">Câmara de Lobos</option>
          <option value="Calheta">Calheta</option>
          <option value="Machico">Machico</option>
          <option value="Santana">Santana</option>
          <option value="São Vicente">São Vicente</option>
          <option value="Porto Moniz">Porto Moniz</option>
          <option value="Ponta do Sol">Ponta do Sol</option>
        </select>
      </label>
      <br />
      <label>
        Location 2:
        <input
          type="text"
          name="location2"
          value={formData.location2}
          onChange={handleChange}
        />
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
      {formData.spotify.map((spotifyValue, index) => (
        <div key={index}>
          <label>
            Spotify {index + 1}:
            <input
              type="text"
              name={`spotify.${index}`}
              value={spotifyValue}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            onClick={() => handleRemoveField("spotify", index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddField("spotify")}>
        + Add Spotify
      </button>
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
      <label>
        Cartaz Source:
        <input
          type="text"
          name="cartazSource"
          value={formData.cartazSource}
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
        Site Url:
        <input
        type="text"
        name="siteUrl"
        value={formData.siteUrl}
        onChange={handleChange}
        />
      </label>
      <div className="buttonContainer">
        <button type="button" onClick={handleExportToJson}>
          Export to JSON
        </button>
        <input
          type="file"
          id="fileInput"
          onChange={handleImportFromJson}
          accept=".json"
          className="hideFileInput"
        />
        <label htmlFor="fileInput" className="fileInputLabel">
          Import from JSON
        </label>
        {editingEvent && (
          <button type="button" onClick={handleReset}>
            Cancel
          </button>
        )}
        <button type="submit">
          {editingEvent ? "Update Event" : "Add Event"}
        </button>
      </div>
    </form>
  );
};

export default EventsForm;
