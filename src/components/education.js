//import { EducationForm } from "./education-form";
import { useState } from "react";

export const Education = ({ updateEducation }) => {
  const newEduForm = {
    courseTitle: "",
    institutionName: "",
    startDate: "",
    endDate: "",
    description: "",
  };
  const [educationInfo, setEducationInfo] = useState([newEduForm]);

  const handleChange = (e) => {
    const updatedEduData = [...educationInfo];
    updatedEduData[e.target.dataset.idx][e.target.className] = e.target.value;
    setEducationInfo(updatedEduData);
  };

  const handleSubmit = (e) => {
    updateEducation(educationInfo);
    e.preventDefault();
  };

  const addEduForm = () => {
    setEducationInfo((current) => [...current, newEduForm]);
  };

  return (
    <div>
      <h2>Education</h2>
      {educationInfo.map((item, idx) => {
        const courseTitleId = `course-${idx}`;
        const institutionNameId = `institution-${idx}`;
        const startDateId = `startdate-${idx}`;
        const endDateId = `enddate-${idx}`;
        const descriptionId = `description-${idx}`;
        return (
          <div key={`education-input${idx}`}>
            <form onSubmit={handleSubmit}>
              <label htmlFor={courseTitleId}>Course title</label>
              <input
                name={courseTitleId}
                type="text"
                data-idx={idx}
                value={educationInfo[idx].courseTitle}
                onChange={handleChange}
                id={courseTitleId}
                className="courseTitle"
              ></input>
              <label htmlFor={institutionNameId}>Institution</label>
              <input
                name={institutionNameId}
                type="text"
                data-idx={idx}
                value={educationInfo[idx].institutionName}
                onChange={handleChange}
                id={institutionNameId}
                className="institutionName"
              ></input>
              <label htmlFor={startDateId}>Course start date</label>
              <input
                name={startDateId}
                type="date"
                data-idx={idx}
                value={educationInfo[idx].startDate}
                onChange={handleChange}
                id={startDateId}
                className="startDate"
              ></input>
              <label htmlFor={endDateId}>Course end date</label>
              <input
                name={endDateId}
                type="date"
                data-idx={idx}
                value={educationInfo[idx].endDate}
                onChange={handleChange}
                id={endDateId}
                className="endDate"
              ></input>
              <label htmlFor={descriptionId}>Description</label>
              <input
                name={descriptionId}
                type="text"
                data-idx={idx}
                value={educationInfo[idx].description}
                onChange={handleChange}
                id={descriptionId}
                className="description"
              ></input>
              <input name="submit" type="submit"></input>
            </form>
          </div>
        );
      })}
      <button onClick={addEduForm}>Add</button>
    </div>
  );
};
