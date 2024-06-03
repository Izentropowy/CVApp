const About = ({ about }) => {
  return (
    <div className="visualization-content about">
      <h3>
        <i className="fa-solid fa-circle-user"></i>ABOUT ME
      </h3>
      <div className="line"></div>
      <p>{about}</p>
    </div>
  );
};

export default About;
