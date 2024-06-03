import { useState } from "react";
import Setup from "./Setup";
import Visualization from "./Visualization";

function App() {
  const [data, setData] = useState({});

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
        />
      </div>
      <div className="visualization">
        <Visualization data={data} />
      </div>
    </>
  );
}

export default App;
