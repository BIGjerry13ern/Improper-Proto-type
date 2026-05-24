import React, { useState } from 'react';
import GameEngine from './components/GameEngine';
import BattleScene from './components/BattleScene';
import './App.css'; // Make sure this file exists!

export default function App() {
  // 'EXPLORE' is your current game, 'BATTLE' is the new RPG combat
  const [gameState, setGameState] = useState('EXPLORE');

  return (
    <div className="app-container">
      
      {/* 1. Exploration Mode: Shows your original game */}
      {gameState === 'EXPLORE' && (
        <div className="explore-view">
          <GameEngine />
          
          {/* Button to trigger a battle (Delete this later if your GameEngine handles it) */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="rpg-button" onClick={() => setGameState('BATTLE')}>
              FIND ENEMY
            </button>
          </div>
        </div>
      )}

      {/* 2. Battle Mode: Shows the new RPG combat scene */}
      {gameState === 'BATTLE' && (
        <BattleScene onBattleEnd={() => setGameState('EXPLORE')} />
      )}
      
    </div>
  );
}
