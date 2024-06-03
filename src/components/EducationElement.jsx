const EducationElement = ({ data }) => {
  return (
    <div className="element">
      {data.educationName && <h4>{data.educationName}</h4>}
      {data.educationField && <h5>{data.educationField}</h5>}
      <div className="dates">
        {data.educationStart && <span>{"Start: " + data.educationStart}</span>}
        {data.educationEnd && <span>{"End: " + data.educationEnd}</span>}
      </div>
    </div>
  );
};

export default EducationElement;
