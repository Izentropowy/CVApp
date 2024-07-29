import React, { useState } from "react";
import Setup from "./Setup";
import Visualization from "./Visualization";

function App() {
  const initialData = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    mail: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    about: "A brief description about John Doe.",
    educationName: "Random School",
    educationField: "Random Field",
    educationStart: "2024-01-01",
    educationEnd: "2024-01-01",
    experienceName: "Random Job",
    experienceField: "Random Position",
    experienceStart: "2024-01-01",
    experienceEnd: "2024-01-01",
    skillName: "Patience",
    certificateName: "Driver Licence",
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const appendData = (id, idData, keysToClear) => {
    setData((prevData) => {
      const updatedData = { ...prevData, [id]: idData };

      // Clear specified keys
      keysToClear.forEach((key) => {
        updatedData[key] = null;
      });

      return updatedData;
    });
  };

  const removeData = (id) => {
    setData((prevData) => {
      const updatedData = { ...prevData };

      updatedData[id] = null;

      return updatedData;
    });
  };

  return (
    <>
      <div className="setup">
        <Setup
          handleChange={handleChange}
          appendData={appendData}
          removeData={removeData}
          data={data}
        />
      </div>
      <div className="visualization">
        <Visualization data={data} />
      </div>
    </>
  );
}

export default App;
