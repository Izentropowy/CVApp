const Community = ({ linkedin, github }) => {
  return (
    <div className="community">
      <div className="centered-header">
        <i className="fa-solid fa-users-rays"></i>
        <h2>COMMUNITY</h2>
      </div>
      <h4>LinkedIn</h4>
      <p>{linkedin || "\u00A0"}</p>
      <h4>Github</h4>
      <p>{github || "\u00A0"}</p>
    </div>
  );
};

export default Community;
