const AddedInfo = ({ name, id, handleDelete }) => {
  return (
    <div className="added">
      <span>{name}</span>
      <button className="delete" type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default AddedInfo;
