import Panel from "./Panel";
import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";

const Accordion = ({ handleChange, appendData, removeData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Panel
        handleChange={handleChange}
        isActive={activeIndex === 0}
        onShow={() =>
          activeIndex !== 0 ? setActiveIndex(0) : setActiveIndex(null)
        }
        form={PersonalDataForm}
        title="Personal data"
      ></Panel>
      <Panel
        handleChange={handleChange}
        isActive={activeIndex === 1}
        onShow={() =>
          activeIndex !== 1 ? setActiveIndex(1) : setActiveIndex(null)
        }
        form={EducationForm}
        appendData={appendData}
        title="Education"
        removeData={removeData}
      ></Panel>
      <Panel
        handleChange={handleChange}
        isActive={activeIndex === 2}
        onShow={() =>
          activeIndex !== 2 ? setActiveIndex(2) : setActiveIndex(null)
        }
        form={EducationForm}
        title="Experience"
      ></Panel>
      <Panel
        handleChange={handleChange}
        isActive={activeIndex === 3}
        onShow={() =>
          activeIndex !== 3 ? setActiveIndex(3) : setActiveIndex(null)
        }
        form={EducationForm}
        title="Skills"
      ></Panel>
      <Panel
        handleChange={handleChange}
        isActive={activeIndex === 4}
        onShow={() =>
          activeIndex !== 4 ? setActiveIndex(4) : setActiveIndex(null)
        }
        form={EducationForm}
        title="Certificates"
      ></Panel>
    </>
  );
};

export default Accordion;
