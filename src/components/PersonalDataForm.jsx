const PersonalDataForm = ({ handleChange }) => {
  return (
    <>
      <form className="setup-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />

        <label htmlFor="mail">Mail:</label>
        <input type="text" id="mail" name="mail" onChange={handleChange} />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
        />

        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={handleChange}
        />

        <label htmlFor="github">Github:</label>
        <input type="text" id="github" name="github" onChange={handleChange} />

        <label htmlFor="about">About:</label>
        <textarea id="about" name="about" rows="10" onChange={handleChange} />
      </form>
    </>
  );
};

export default PersonalDataForm;
