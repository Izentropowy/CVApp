const Name = ({ firstName, lastName }) => {
  return (
    <div className="name">
      <h2>{firstName || "\u00A0"}</h2>
      <h2>{lastName || "\u00A0"}</h2>
    </div>
  );
};

export default Name;
