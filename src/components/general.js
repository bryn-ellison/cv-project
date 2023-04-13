import { useState } from "react";

export const General = ({ updateGeneral }) => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    updateGeneral(generalInfo);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Info</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          value={generalInfo.firstName}
          onChange={handleChange}
        ></input>
        <label htmlFor="secondName">Second Name</label>
        <input
          name="secondName"
          type="text"
          value={generalInfo.secondName}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={generalInfo.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="tel"
          value={generalInfo.phone}
          onChange={handleChange}
        ></input>
        <input name="submit" type="submit"></input>
      </form>
    </div>
  );
};
