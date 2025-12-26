
export const generateFeedback = (score, maxScore = 9) => {
  const percentage = (score / maxScore) * 100;
  
  if (score >= 8) {
    return {
      level: "Excellent Performance",
      color: "#10b981",
      backgroundColor: "#ecfdf5",
      description: "You have demonstrated outstanding speaking skills with clear pronunciation, natural fluency, and excellent command of vocabulary and grammar.",
      suggestions: [
        "Continue practicing advanced speaking techniques",
        "Try speaking on more complex or technical topics",
        "Consider helping other learners as a peer mentor"
      ]
    };
  } else if (score >= 6 && score < 8) {
    return {
      level: "Good Performance",
      color: "#f59e0b",
      backgroundColor: "#fffbeb",
      description: "You have shown solid progress in your speaking abilities. With some focused practice, you can further improve your skills.",
      suggestions: [
        "Work on areas that scored lower (6-7 range)",
        "Practice speaking more frequently with native speakers",
        "Record yourself speaking and review for improvement areas"
      ]
    };
  } else {
    return {
      level: "Needs Improvement",
      color: "#ef4444",
      backgroundColor: "#fef2f2",
      description: "You have made a start in developing your speaking skills. Dedicated practice and focused attention on weak areas will help you progress.",
      suggestions: [
        "Focus on pronunciation exercises daily",
        "Expand vocabulary through targeted learning",
        "Practice grammar structures in speaking contexts",
        "Consider working with a speaking coach or tutor"
      ]
    };
  }
};


export const getScoreColor = (score, maxScore = 9) => {
  const normalizedScore = score / maxScore;
  if (normalizedScore >= 0.88) return "#10b981"; // Green - Excellent
  if (normalizedScore >= 0.67) return "#f59e0b"; // Amber - Good
  return "#ef4444"; // Red - Needs improvement
};
