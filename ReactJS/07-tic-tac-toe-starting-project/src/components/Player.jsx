import {useState} from 'react';
import '../index.css';
export default function Player({initialName, symbol}){

    const [playerName, setPlayerName]=useState(initialName);
    const [isEditing, setIsEditing]=useState(false);

    function onUpdate(event){
        console.log(event);
        setPlayerName(event.target.value);
        console.log(playerName);
    }
    return (<li>
    <span>
    {isEditing?<input type='text' className='player player-name' value={playerName} required onChange={onUpdate}/>:<span className="player-name">{playerName}</span>}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={()=>setIsEditing((editing)=>!editing)}>{isEditing ?'Save':'Edit'}</button>

        
  </li>);
}