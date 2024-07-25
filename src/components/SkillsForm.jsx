import AddedInfo from "./AddedInfo";

const SkillsForm = ({ handleChange, handleSubmit, handleDelete, elements }) => {
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
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          name="skillName"
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </>
  );
};

export default SkillsForm;
