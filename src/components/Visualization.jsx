import Name from "./Name";
import Photo from "./Photo";
import Contact from "./Contact";
import Community from "./Community";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certificates from "./Certificates";

const Visualization = ({ data }) => {
  return (
    <>
      <div className="left">
        <Name firstName={data.firstName} lastName={data.lastName}></Name>
        <Photo></Photo>
        <hr />
        <Contact
          phoneNumber={data.phoneNumber}
          address={data.address}
          s
          mail={data.mail}
        ></Contact>
        <hr />
        <Community linkedin={data.linkedin} github={data.github}></Community>
      </div>
      <div className="right">
        <About about={data.about}></About>
        <Education data={data}></Education>
        <Experience></Experience>
        <Skills></Skills>
        <Certificates></Certificates>
      </div>
    </>
  );
};

export default Visualization;
