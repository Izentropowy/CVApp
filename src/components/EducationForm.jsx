import AddedInfo from "./AddedInfo";

const EducationForm = ({
  handleChange,
  handleSubmit,
  handleDelete,
  elements,
}) => {
  return (
    <>
      <form className="setup-form" onSubmit={handleSubmit}>
        {elements.map((item) => (
          <AddedInfo
            id={item.id}
            key={item.id}
            name={item.name}
            handleDelete={handleDelete}
          />
        ))}
        <label htmlFor="name">University name:</label>
        <input
          type="text"
          id="name"
          name="educationName"
          onChange={handleChange}
          required
        />

        <label htmlFor="field">Field of study:</label>
        <input
          type="text"
          id="field"
          name="educationField"
          onChange={handleChange}
        />

        <label htmlFor="start">Start Year:</label>
        <input
          type="date"
          id="start"
          name="educationStart"
          onChange={handleChange}
        />

        <label htmlFor="end">End Year:</label>
        <input
          type="date"
          id="end"
          name="educationEnd"
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </>
  );
};

export default EducationForm;
