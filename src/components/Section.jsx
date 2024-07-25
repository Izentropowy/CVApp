import SectionElement from "./SectionElement";

const Section = ({ title, icon, filterKey, data }) => {
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => key.startsWith(filterKey))
  );

  const createElements = (data) => {
    return Object.entries(data)
      .filter(([id, filteredData]) => filteredData)
      .map(([id, filteredData]) => (
        <SectionElement key={id} data={filteredData} filterKey={filterKey} />
      ));
  };

  return (
    <div className={`visualization-content ${filterKey}`}>
      <h3>
        <i className={`fa-solid ${icon}`}></i> {title}
      </h3>
      <div className="line"></div>
      {createElements(data)}
      {filteredData && (
        <SectionElement data={filteredData} filterKey={filterKey} />
      )}
    </div>
  );
};

export default Section;
