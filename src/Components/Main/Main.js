import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from "react-router"
import axios from 'axios'

function Main(){
    const navigate= useNavigate()

    const races = [
        {type:'Asian'},
        {type:'Indian'},
        {type:'African'},
        {type:'Afro-American'},
        {type:'Evropean'}]

    
    const [player, setPlayer] = useState({
        firstname:'',
        lastname:'',
        age: '',
        race: '',
        text:''
    
    }) 

    function handle(e){
        const newPlayer={...player}
        newPlayer[e.target.name]= e.target.value
        setPlayer(newPlayer)
    }

    const add= async (event)=>{  
        try {
            event.preventDefault()
            const response = await axios.post('http://localhost:4000/player', player)
            alert(response.data);
            navigate('/players')
        } catch (error) {
            console.log(error);
        }
    }

    return(
    
        <div className="main">

            <h1> Welcome !</h1>
            <form onSubmit={add}>
                 <input type={'text'} onChange={(e)=>handle(e)} name='firstname' value={player.firstname}  placeholder={'Firstname'} />
                 <input type={'text'} onChange={(e)=>handle(e)} name='lastname' value={player.lastname}  placeholder={'Lastname'} />
                 <input type={'number'} onChange={(e)=>handle(e)} name='age' value={player.age} required placeholder={'Age'} />

                 <select name='race' onChange={(e)=>handle(e)}>
                     <option  value="0">Select Your Race...</option>
                     {races.map((item,index)=><option key={index} name='race' value={item.type}>{item.type}</option>)}
                 </select>

                 <textarea onChange={(e)=>handle(e)} name='text' value={player.text} placeholder="Text..." />
                 <br/>
                 <button type='submit'>Add</button>
            </form>
            <Link to={'/players'}> Users </Link>
    </div>
    )
}export default Main;