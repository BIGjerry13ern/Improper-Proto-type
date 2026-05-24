import { useState } from 'react';
import CommandMenu from './CommandMenu';

export default function BattleScene({ onBattleEnd }) {
  const [playerHp, setPlayerHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);
  const [log, setLog] = useState("A monster appears!");

  const handleAction = (action) => {
    if (action === 'ATTACK') {
      const dmg = 20;
      setEnemyHp(prev => Math.max(0, prev - dmg));
      setLog(`You hit for ${dmg}!`);
      
      // Basic Enemy Turn Delay
      setTimeout(() => {
        setPlayerHp(prev => Math.max(0, prev - 15));
        setLog("Monster attacks for 15!");
      }, 1000);
    }
  };

  if (enemyHp <= 0) return <div className="rpg-window" onClick={onBattleEnd}>VICTORY! (Click to Return)</div>;
  if (playerHp <= 0) return <div className="rpg-window" onClick={onBattleEnd}>DEFEAT... (Click to Return)</div>;

  return (
    <div className="battle-container">
      <div className="rpg-window">
        <p>ENEMY HP: {enemyHp}</p>
        <p>PLAYER HP: {playerHp}</p>
        <p>{log}</p>
      </div>
      <CommandMenu onAction={handleAction} />
    </div>
  );
}
