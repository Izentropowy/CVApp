import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Panel = ({
  handleChange,
  isActive,
  onShow,
  form: FormComponent,
  title,
  appendData,
  removeData,
}) => {
  const [AddedList, setAddedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const name = formProps.educationName;
    // add 0 as a fisrt char to mark it as an added data
    const id = `0${uuidv4()}`;

    appendData(id, formProps, Object.keys(formProps));

    // clear form
    e.target.reset();

    setAddedList([...AddedList, { name, id }]);
  };

  const handleDelete = (id) => {
    setAddedList(AddedList.filter((item) => item.id !== id));
    removeData(id);
  };

  return (
    <>
      <button className="collapse-button" onClick={onShow}>
        {title + " "}
        {String.fromCharCode(11167)}
      </button>
      {isActive && (
        <FormComponent
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          elements={AddedList}
        />
      )}
    </>
  );
};

export default Panel;
