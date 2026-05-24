import React, { useState } from 'react';
import GameEngine from './components/GameEngine';
import BattleScene from './components/BattleScene';
import './App.css';

export default function App() {
  // 'EXPLORE' is your map/gameplay, 'BATTLE' is your combat mode
  const [gameState, setGameState] = useState('EXPLORE');

  return (
    <div className="app-container">
      
      {/* State 1: Exploration */}
      {gameState === 'EXPLORE' && (
        <div className="explore-view">
          <GameEngine />
          
          {/* Temporary button to test that the switch works */}
          <button 
            style={{ marginTop: '20px', padding: '10px' }} 
            onClick={() => setGameState('BATTLE')}
          >
            ENTER BATTLE
          </button>
        </div>
      )}

      {/* State 2: Combat */}
      {gameState === 'BATTLE' && (
        <BattleScene onBattleEnd={() => setGameState('EXPLORE')} />
      )}
      
    </div>
  );
}
