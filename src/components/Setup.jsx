import Accordion from "./Accordion";

const Setup = ({ handleChange, appendData, removeData }) => {
  return (
    <>
      <Accordion
        handleChange={handleChange}
        appendData={appendData}
        removeData={removeData}
      ></Accordion>
    </>
  );
};

export default Setup;
