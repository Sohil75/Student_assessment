import React from 'react';
import '../styles/AssessmentReport.css';
import { generateFeedback } from '../utils/feedbackLogic';

const AssessmentReport = ({ student }) => {
  const feedback = generateFeedback(student.overallScore, student.maxScore);
  const scorePercentage = (student.overallScore / student.maxScore) * 100;

  return (
    <div className="assessment-header">
      <div className="header-content">
        <h1>Student Speaking Assessment Report</h1>
        <p className="assessment-date">{student.assessmentDate}</p>
      </div>

      <div className="student-info-card">
        <div className="student-details">
          <div className="info-group">
            <label>Student Name</label>
            <h2>{student.name}</h2>
          </div>
          <div className="info-group">
            <label>Student ID</label>
            <p>{student.studentId}</p>
          </div>
        </div>

        <div className="overall-score-container">
          <div className="score-circle-main" style={{ borderColor: feedback.color }}>
            <div className="score-inner">
              <span className="overall-score">{student.overallScore}</span>
              <span className="out-of">/{student.maxScore}</span>
            </div>
            <div className="score-label">Overall Score</div>
          </div>
          <div className="score-progress">
            <div className="progress-bar-main">
              <div 
                className="progress-fill-main"
                style={{
                  width: `${scorePercentage}%`,
                  backgroundColor: feedback.color
                }}
              ></div>
            </div>
            <div className="progress-text">{Math.round(scorePercentage)}% Achieved</div>
          </div>
        </div>
      </div>

      <div className="feedback-card" style={{ backgroundColor: feedback.backgroundColor, borderLeftColor: feedback.color }}>
        <div className="feedback-header">
          <h3 style={{ color: feedback.color }}>{feedback.level}</h3>
        </div>
        <p className="feedback-description">{feedback.description}</p>
        <div className="feedback-suggestions">
          <h4>Next Steps:</h4>
          <ul>
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssessmentReport;
