import Accordion from "./Accordion";

const Setup = ({ handleChange, appendData, removeData, data }) => {
  return (
    <>
      <Accordion
        handleChange={handleChange}
        appendData={appendData}
        removeData={removeData}
        data={data}
      ></Accordion>
    </>
  );
};

export default Setup;
