import { useState ,useEffect} from "react";
import {useNavigate} from "react-router"
import {useParams, Link} from "react-router-dom"
import axios from "axios";

function Players(){
    const {id} = useParams()
    const [players, setPlayers] = useState([])

    const [update, setUpdate] = useState(true)

    useEffect(()=>{
        const getPlayers = async ()=>{
            const response = await axios.get('http://localhost:4000/player')
            setPlayers(response.data)
        }
        getPlayers()
    },[update])
      
    const deleteOnePlayer = async(e) => {
        try {
            const response = await axios.delete(`http://localhost:4000/player/${e.target.id}`)
            alert(response.data);
            setUpdate(!update)
        } catch (error) {
            console.log(error);
        }
    }

    const navigate= useNavigate()

    return(
        <div className="main">
            <h1>   Players</h1>
            
            {players.map((item,id)=>{
                return(
            <div key={id} style={{height:'350px'}}>
                <button onClick={(e)=>navigate(`/players/${item.id}`)}style={{width:'70%',padding:'10px',cursor:'pointer',marginBottom:'8px'}}
             key={id}>{id+1}.  {item.firstname} {item.lastname}</button>
             <button onClick={deleteOnePlayer} style={{marginLeft:'5px',padding:'10px',cursor:'pointer'}} id={item.id}>X</button>
                </div>
                
             )}
             )}
            <Link to={'/'} style={{bottom:'10px'}}>Add player</Link>
        </div>
    )
}export default Players;