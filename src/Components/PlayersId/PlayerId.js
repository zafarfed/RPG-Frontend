import {useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function PlayersId(){
    const {id} = useParams()

    const [playerInfo, setPlayerInfo] = useState([])
    const [disable, setDisable] = useState(true)

    const [update, setUpdate] = useState(true)

    const [changePlayer, setChangePlayer] = useState({
        id,
    })
 

    useEffect(()=>{
        const getOnePlayer = async ()=>{
            const response = await axios.get(`http://localhost:4000/player/${id}`)
            setPlayerInfo(response.data)
        }
        getOnePlayer()
    },[update])


    const change=(event)=>{
        event.preventDefault()
        setDisable(!disable)
    }

    const save= async(e)=>{
        try {
            e.preventDefault()        
            setDisable(!disable)
            const response = await axios.put(`http://localhost:4000/player/${id}`, changePlayer)
            setUpdate(!update)
            alert(response.data);
        } catch (error) {
            console.log(error);
        }
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
            { 
                playerInfo?.length>0 &&
              <form  id={'formSub'} onSubmit={change || save}>
                 <input type={'text'} name='firstname' disabled={disable} defaultValue={playerInfo[0]?.firstname} onChange={(e)=>setChangePlayer({...changePlayer, firstname: e.target.value})}/>
                 <input type={'text'} disabled={disable} defaultValue={playerInfo[0]?.lastname} onChange={(e)=>setChangePlayer({...changePlayer, lastname: e.target.value})}/>
                 <input type={'number'} disabled={disable} defaultValue={playerInfo[0]?.age} onChange={(e)=>setChangePlayer({...changePlayer, age: e.target.value})}/>
                 <select disabled={disable} onChange={(e)=>setChangePlayer({...changePlayer, race: e.target.value})}>
                     <option defaultValue={playerInfo[0]?.race}>{playerInfo[0]?.race}</option>
                 </select>
                 <textarea disabled={disable} defaultValue={playerInfo[0]?.text} onChange={(e)=>setChangePlayer({...changePlayer, text: e.target.value})}/>
             </form>
            }
            <Link to={'/players'}> Users </Link>
             
         </div>
    )
}export default PlayersId;