import AddedInfo from "./AddedInfo";

const CertificatesForm = ({
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
        <label htmlFor="certificate">Certificate:</label>
        <input
          type="text"
          id="certifcate"
          name="certificateName"
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

export default CertificatesForm;
