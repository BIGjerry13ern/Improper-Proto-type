export default function CommandMenu({ onAction }) {
  return (
    <div className="rpg-window">
      <button onClick={() => onAction('ATTACK')}>ATTACK</button>
      <button onClick={() => onAction('MAGIC')}>MAGIC</button>
      <button onClick={() => onAction('ITEM')}>ITEM</button>
      <button onClick={() => onAction('FLEE')}>FLEE</button>
    </div>
  );
}
