// Improper Project: Root Component
import React from 'react';
import GameEngine from './components/GameEngine';

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#121212' }}>
      <GameEngine />
    </div>
  );
}