import React from 'react';
import '../styles/SkillCards.css';
import { getScoreColor } from '../utils/feedbackLogic';

const SkillCards = ({ skills }) => {
  return (
    <div className="skills-container">
      <h3>Skill-wise Assessment</h3>
      <div className="skills-grid">
        {Object.entries(skills).map(([key, skill]) => (
          <div key={key} className="skill-card">
            <div className="skill-header">
              <h4>{skill.name}</h4>
              <div className="skill-description">{skill.description}</div>
            </div>
            <div className="skill-score-section">
              <div className="score-circle" style={{ borderColor: getScoreColor(skill.score, skill.maxScore) }}>
                <span className="score-value">{skill.score}</span>
                <span className="score-max">/{skill.maxScore}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{
                    width: `${(skill.score / skill.maxScore) * 100}%`,
                    backgroundColor: getScoreColor(skill.score, skill.maxScore)
                  }}
                ></div>
              </div>
              <div className="score-percentage">
                {Math.round((skill.score / skill.maxScore) * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
