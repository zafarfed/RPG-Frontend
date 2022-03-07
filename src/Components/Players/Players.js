import { useState ,useEffect} from "react";
import {useNavigate} from "react-router"

function Players(){

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        let playersList = localStorage.getItem('players')

    if (playersList) {
        let playersArray = JSON.parse(playersList)
        setPlayers(playersArray)   
       }
    },[])
      
    const navigate= useNavigate()

    return(
        <div className="main">
            <h1>   Players</h1>
            
            {players.map((item,index)=>{
                return(
            <button onClick={(e)=>navigate('/players/id')} style={{width:'70%',padding:'10px',cursor:'pointer',marginBottom:'8px'}}
             key={index}>{index+1}.  {item.playerFirstname} {item.playerLastname}</button>
                
             )}
             )}
            
        </div>
    )
}export default Players;