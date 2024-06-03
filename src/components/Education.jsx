import EducationElement from "./EducationElement";

const Education = ({ data }) => {
  const temporaryData = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => !key.startsWith("0"))
  );

  const createElements = (data) => {
    return Object.entries(data)
      .filter(([id, elementData]) => elementData)
      .map(([id, elementData]) => (
        <EducationElement key={id} data={elementData} />
      ));
  };
  return (
    <div className="visualization-content education">
      <h3>
        <i className="fa-solid fa-graduation-cap"></i>EDUCATION
      </h3>
      <div className="line"></div>

      {createElements(data)}
      {temporaryData && <EducationElement data={temporaryData} />}
    </div>
  );
};

export default Education;
