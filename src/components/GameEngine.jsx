import React, { useState } from 'react';
import { storyCampaign } from '../storyData';
import { db } from '../firebase'; // Imports from the src folder

export default function GameEngine() {
  const [stats, setStats] = useState({
    health: 100, health_max: 100, strength: 10, magic: 10, stealth: 10, agility: 10, charisma: 10,
  });
  const [currentPhase, setCurrentPhase] = useState("act_1_phase_1");

  const node = storyCampaign[currentPhase];

  const handleChoice = (choice) => {
    setStats((prevStats) => {
      const newStats = { ...prevStats };
      for (const [stat, value] of Object.entries(choice.statImpact)) {
        newStats[stat] = (newStats[stat] || 0) + value;
      }
      return newStats;
    });
    setCurrentPhase(choice.nextPhase);
  };

  if (!node) return <div>Loading...</div>;

  return (
    <div style={{ color: '#00FF00', padding: '20px', fontFamily: 'monospace' }}>
      <h3>IMPROPER | HP: {stats.health}</h3>
      <h2>{node.title}</h2>
      <p>{node.text}</p>
      {node.choices.map((choice, index) => (
        <button key={index} onClick={() => handleChoice(choice)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
}
