// Improper Project: Core Game Engine
import React, { useState } from 'react';
import { storyCampaign } from '../storyData';

export default function GameEngine() {
  const [stats, setStats] = useState({
    health: 100, health_max: 100, strength: 10, magic: 10, stealth: 10, agility: 10, charisma: 10,
  });
  const [currentPhase, setCurrentPhase] = useState("act_1_phase_1");
  const [playerFlags, setPlayerFlags] = useState([]);

  const node = storyCampaign[currentPhase];

  const handleChoice = (choice) => {
    setStats((prevStats) => {
      const newStats = { ...prevStats };
      for (const [stat, value] of Object.entries(choice.statImpact)) {
        newStats[stat] = (newStats[stat] || 0) + value;
      }
      if (newStats.health > newStats.health_max) newStats.health = newStats.health_max;
      return newStats;
    });

    if (choice.flagSet && !playerFlags.includes(choice.flagSet)) {
      setPlayerFlags([...playerFlags, choice.flagSet]);
    }

    setCurrentPhase(choice.nextPhase);
  };

  if (!node) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: '#121212', color: '#00FF00', padding: '20px', fontFamily: 'monospace', minHeight: '100vh' }}>
      
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h3>IMPROPER | PLAYER VITALS</h3>
        <p>HP: {stats.health} / {stats.health_max} | STR: {stats.strength} | MAG: {stats.magic} | STL: {stats.stealth}</p>
      </div>

      <div>
        <p style={{ color: '#888' }}>{node.act}</p>
        <h2>{node.title}</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>{node.text}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
        {node.choices.map((choice, index) => (
          <button 
            key={index} 
            onClick={() => handleChoice(choice)}
            style={{
              padding: '15px',
              backgroundColor: '#1E1E1E',
              color: '#FFF',
              border: '1px solid #444',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            {choice.text}
            <div style={{ color: '#00FF00', fontSize: '0.8rem', marginTop: '5px' }}>
               ( {Object.entries(choice.statImpact).map(([key, val]) => `${val > 0 ? '+' : ''}${val} ${key.toUpperCase()}`).join(' | ')} )
            </div>
          </button>
        ))}
      </div>
      
    </div>
  );
}
