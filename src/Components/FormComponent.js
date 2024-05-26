import React, { useState, useNavigate } from "react";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("button clicked");
    console.log(formData);
    saveUser(formData);
  };

  const saveUser = async (user) => {
    const form = new FormData();
    for (const key in user) {
      form.append(key, user[key]);
    }

    try {
      const response = await axios.post("http://localhost:5000/users", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", response.data);
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        age: "",
        dob: "",
        image: null,
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div
      style={{
        height: 300,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          height: 250,
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default FormComponent;
