import AddedInfo from "./AddedInfo";

const ExperienceForm = ({
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
        <label htmlFor="name">Company name:</label>
        <input
          type="text"
          id="name"
          name="experienceName"
          onChange={handleChange}
          required
        />

        <label htmlFor="field">Position:</label>
        <input
          type="text"
          id="field"
          name="experienceField"
          onChange={handleChange}
        />

        <label htmlFor="start">Start Year:</label>
        <input
          type="date"
          id="start"
          name="experienceStart"
          onChange={handleChange}
        />

        <label htmlFor="end">End Year:</label>
        <input
          type="date"
          id="end"
          name="experienceEnd"
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </>
  );
};

export default ExperienceForm;
