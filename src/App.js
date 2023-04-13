import { useState } from "react";
import { Education } from "./components/education";
import { General } from "./components/general";
import { Preview } from "./components/preview";

function App() {
  const [general, setGeneral] = useState({});
  const updateGeneral = (obj) => {
    setGeneral(obj);
  };

  const [educationList, setEducationList] = useState([]);
  const updateEducation = (eduArray) => {
    setEducationList(eduArray);
  };

  return (
    <div>
      <h1>CV Builder</h1>
      <General updateGeneral={updateGeneral} />
      <Education updateEducation={updateEducation} />
      <Preview general={general} education={educationList} />
    </div>
  );
}

export default App;
