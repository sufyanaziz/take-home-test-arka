import React from "react";
import EidCard from "./components/EidCard";
import EducationList from "./components/EducationList";
import AvatarGenerator from "./components/AvatarGenerator";

import "./App.css";

function App() {
  return (
    <div className="App">
      <EidCard />
      <EducationList />
      <AvatarGenerator />
    </div>
  );
}

export default App;
