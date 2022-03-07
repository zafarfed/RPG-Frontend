import {useEffect,useState,useRef} from 'react'
// import fs from "react-fs"
// import path from "path"

function PlayersId(){
    const playerFirstame = useRef()
    const playerLastname = useRef()
    const playerAge = useRef()
    const playerRace = useRef()
    const playerText = useRef()


    const [players, setPlayers] = useState([])
    const [disable, setDisable] = useState(true)
    const [firstname, setFirstname] = useState(playerFirstame.current?.defaultValue)    
    const [lastname, setLastname] = useState(playerLastname.current?.defaultValue)    
    const [age, setAge] = useState(playerAge.current?.playerAge)    
    const [raceType, setRaceType] = useState('')    
    const [text, setText] = useState('') 
    const [playerChanged, setPlayerChanged] = useState([]) 

    useEffect(()=>{
        let playersList = localStorage.getItem('players')

    if (playersList) {
        let playersArray = JSON.parse(playersList)
        setPlayers(playersArray)   
       }
    },[])


    const change=(event)=>{
        event.preventDefault()
        setDisable(!disable)
    }

    const save=(event)=>{
        event.preventDefault()
        let changedPlayer = [{
            playerFirstname: firstname,
            playerLastname: lastname,
            playerAge: age,
            playerRace: raceType,
            playerText: text
        }]
        setDisable(!disable)
        localStorage.setItem('players',JSON.stringify(changedPlayer))
        setPlayerChanged([...playerChanged, ...changedPlayer])
    
        // fs.writeFile('data.json', JSON.stringify(changedPlayer), (err) => {
        //     // When a request is aborted - the callback is called with an AbortError
        //     console.log("yozilmadi");
        // });
    }
   

    return(
        <div className="main">
            <h1>Player info</h1> 
        {
           disable ? <button form={'formSub'} type='submit' style={{float:'right'}} onClick={change}>change</button> :
             <button form={'formSub'} type='submit' style={{float:'right'}} onClick={save}>save</button>
        }
        <br/>
        <br/>

             {players.map((item, index)=>{return (
              <form key={index} id={'formSub'} onSubmit={change || save}>
                 <input type={'text'} ref={playerFirstame} disabled={disable} defaultValue={item.playerFirstname} onChange={(e)=>setFirstname(e.target.value)}/>
                 <input type={'text'} ref={playerLastname} disabled={disable} defaultValue={item.playerLastname} onChange={(e)=>setLastname(e.target.value)}/>
                 <input type={'number'} ref={playerAge} disabled={disable} defaultValue={item.playerAge} onChange={(e)=>setAge(e.target.value)}/>
                 <select disabled={disable} ref={playerRace} onChange={(e)=>setRaceType(e.target.value)}>
                     <option defaultValue={item.userRace}>{item.playerRace}</option>
                 </select>
                 <textarea ref={playerText} disabled={disable} defaultValue={item.playerText} onChange={(e)=>setText(e.target.value)}/>
             </form>
             ) })}  
         </div>
    )
}export default PlayersId;