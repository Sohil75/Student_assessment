import React from 'react';
import '../styles/ChartComponent.css';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ChartComponent = ({ skillScores }) => {
  const labels = [
    skillScores.pronunciation.name,
    skillScores.fluency.name,
    skillScores.vocabulary.name,
    skillScores.grammar.name
  ];

  const scores = [
    skillScores.pronunciation.score,
    skillScores.fluency.score,
    skillScores.vocabulary.score,
    skillScores.grammar.score
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Score (out of 9)',
        data: scores,
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 2,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 9,
        ticks: {
          stepSize: 1.5,
          font: {
            size: 11
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3>Skills Overview - Radar Chart</h3>
      <div className="chart-wrapper">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
