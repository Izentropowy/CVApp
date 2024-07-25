const SectionElement = ({ filterKey, data }) => {
  const name = `${filterKey}Name`;
  const field = `${filterKey}Field`;
  const start = `${filterKey}Start`;
  const end = `${filterKey}End`;

  return (
    <div className="section-element">
      {data[name] && <h4>{data[name]}</h4>}
      {data[field] && <h5>{data[field]}</h5>}
      <div className="dates">
        {data[start] && <span>{"Start: " + data[start]}</span>}
        {data[end] && <span>{"End: " + data[end]}</span>}
      </div>
    </div>
  );
};

export default SectionElement;
