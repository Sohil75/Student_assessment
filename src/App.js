import React from 'react';
import './App.css';
import AssessmentReport from './components/AssessmentReport';
import SkillCards from './components/SkillCards';
import ChartComponent from './components/ChartComponent';
import { studentData } from './data/studentData';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <AssessmentReport student={studentData} />
        <div className="main-content">
          <SkillCards skills={studentData.skills} />
          <ChartComponent skillScores={studentData.skills} />
        </div>
      </div>
      <footer className="app-footer">
        <p>&copy; 2025 Student Speaking Assessment System. Frontend Only - No Database.</p>
      </footer>
    </div>
  );
}

export default App;
