// Visualization.js
import React, { forwardRef } from "react";
import Name from "./Name";
import Photo from "./Photo";
import Contact from "./Contact";
import Community from "./Community";
import About from "./About";
import Section from "./Section";

const Visualization = ({ data }) => {
  return (
    <>
      <div className="left">
        <Name firstName={data.firstName} lastName={data.lastName} />
        <Photo />
        <hr />
        <Contact
          phoneNumber={data.phoneNumber}
          address={data.address}
          mail={data.mail}
        />
        <hr />
        <Community linkedin={data.linkedin} github={data.github} />
      </div>
      <div className="right">
        <About about={data.about} />
        <Section
          title="Education"
          icon="fa-graduation-cap"
          filterKey="education"
          data={data}
        />
        <Section
          title="Experience"
          icon="fa-briefcase"
          filterKey="experience"
          data={data}
        />
        <Section title="Skills" icon="fa-tools" filterKey="skill" data={data} />
        <Section
          title="Certificates"
          icon="fa-certificate"
          filterKey="certificate"
          data={data}
        />
      </div>
    </>
  );
};

export default Visualization;
