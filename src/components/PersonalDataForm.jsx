const PersonalDataForm = ({ handleChange, data }) => {
  return (
    <>
      <form className="setup-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
          value={data.phoneNumber}
        />

        <label htmlFor="mail">Mail:</label>
        <input
          type="text"
          id="mail"
          name="mail"
          onChange={handleChange}
          value={data.mail}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          value={data.address}
        />

        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={handleChange}
          value={data.linkedin}
        />

        <label htmlFor="github">Github:</label>
        <input
          type="text"
          id="github"
          name="github"
          onChange={handleChange}
          value={data.github}
        />

        <label htmlFor="about">About:</label>
        <textarea
          id="about"
          name="about"
          rows="10"
          onChange={handleChange}
          value={data.about}
        />
      </form>
    </>
  );
};

export default PersonalDataForm;
