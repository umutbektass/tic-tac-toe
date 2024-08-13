import React, { useState } from "react";

const Player = ({ initialName, symbol,isActive }) => {
    const [playerName,setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(wasEditing => !wasEditing); // best practice setIsEditing(!isEditing) yerine bunu kullan. 
    //Bu daha performanslı ve daha hızlı çalışır.
  }
  function handleChange (e) {
    setPlayerName(e.target.value)
  }
  let editablePlayer = <span className="player-name">{playerName}</span>;
  let btnCaption="Edit"
  if (isEditing) {
    editablePlayer = <input type="text" required value={playerName} onChange={handleChange} />;
    btnCaption = "Save"
  }
  return (
    <li className={isActive && 'active'}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </span>
    </li>
  );
};

export default Player;
