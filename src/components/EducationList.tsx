import React, { useState } from "react";
import {
  EDUCATION_LISTS,
  EducationListType,
} from "../constants/education-list";

const EducationList = () => {
  const [educationKey, setEducationKey] = useState("");
  const [educationDataValue, setEducationDataValue] = useState("");
  const [data, setData] = useState<Partial<EducationListType>>({});

  const onChooseEducation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const filterEducation = EDUCATION_LISTS.find((ed) => ed.key === value);
    setEducationKey(value);
    setEducationDataValue("");
    setData(filterEducation || {});
  };

  return (
    <>
      <h1 style={{ padding: "16px 16px 4px 16px" }}>Education List</h1>
      <div className="education-list-container">
        <div className="education-list-type">
          <select
            className="education-list-input-select"
            value={educationKey}
            onChange={onChooseEducation}
          >
            <option value="" disabled hidden={!!educationKey}>
              Pilih jenjang
            </option>
            {EDUCATION_LISTS.map((education) => (
              <option key={education.key} value={education.key}>
                {education.title}
              </option>
            ))}
          </select>
        </div>
        <div className="education-list-data">
          <select
            className="education-list-input-select secondary"
            value={educationDataValue}
            onChange={(e) => setEducationDataValue(e.target.value)}
          >
            <option value="" hidden>
              {!educationKey ? `Pilih tingkatan` : "Pilih jenjangnya dulu!"}
            </option>
            <optgroup label={data.title ? data.title : "Pilih tingkatan"}>
              {data.data?.map((ed) => (
                <option key={ed.value} value={ed.value}>
                  {ed.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </>
  );
};

export default EducationList;
