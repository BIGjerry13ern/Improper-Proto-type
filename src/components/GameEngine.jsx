import React, { useState } from 'react';
import storyData from './storyData.json';

export default function Game() {
  const [nodeId, setNodeId] = useState("start");
  const [stats, setStats] = useState({ credits: 0, health: 100, heat: 0 });

  const currentNode = storyData[nodeId];

  const handleChoice = (choice) => {
    // Update Stats
    if (choice.stat) {
      setStats(prev => ({
        ...prev,
        credits: prev.credits + (choice.stat.credits || 0),
        health: prev.health + (choice.stat.health || 0),
        heat: prev.heat + (choice.stat.heat || 0)
      }));
    }
    // Change Node
    setNodeId(choice.next);
  };

  if (!currentNode) return <div>Error: Node "{nodeId}" not found.</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#111', color: '#0f0', minHeight: '100vh' }}>
      <h1>{currentNode.title}</h1>
      <p>{currentNode.text}</p>
      <div style={{ marginTop: '20px' }}>
        {currentNode.choices.map((c, i) => (
          <button key={i} onClick={() => handleChoice(c)} style={{ display: 'block', margin: '10px 0' }}>
            {c.text}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '50px', borderTop: '1px solid #333' }}>
        <p>Credits: {stats.credits} | Health: {stats.health} | Heat: {stats.heat}</p>
      </div>
    </div>
  );
}
