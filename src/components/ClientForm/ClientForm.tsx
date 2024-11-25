import React, { useState } from "react";

const ClientForm = () => {
  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Création du nouveau client.");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstname"
        type="text"
        required
        onChange={handleChange}
        value={formData.firstname}
      />
      <input
        name="lastname"
        type="text"
        required
        onChange={handleChange}
        value={formData.lastname}
      />
      <input
        name="email"
        type="text"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <input
        name="phoneNumber"
        type="text"
        required
        onChange={handleChange}
        value={formData.phoneNumber}
      />{" "}
      <input
        name="phoneNumber"
        type="text"
        required
        onChange={handleChange}
        value={formData.phoneNumber}
      />
      <button></button>
    </form>
  );
};

export default ClientForm;
