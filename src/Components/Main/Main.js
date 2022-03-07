import {Link} from 'react-router-dom'
import {useState, useRef} from 'react'
import {useNavigate} from "react-router"

function Main(){

    const players = JSON.parse(localStorage.getItem('players')) || []
       
    const navigate= useNavigate()

    const race =[
        {type:'Asian'},
        {type:'Indian'},
        {type:'African'},
        {type:'Afro-American'},
        {type:'Evropean'},
    ]

    const playerFirstname = useRef()
    const playerLastname = useRef()
    const playerAge = useRef()
    const playerRace = useRef()
    const playerText = useRef()

    const add= (event)=>{  
        event.preventDefault()
        let newPlayer={
            playerFirstname : event.target[0].value,
            playerLastname : event.target[1].value,
            playerAge : event.target[2].value,
            playerRace : event.target[3].value,
            playerText : event.target[4].value
        }

        players.push(newPlayer)
        localStorage.setItem('players',JSON.stringify(players))
        navigate('/players')

    }

    return(
    
        <div className="main">

            <h1> Welcome !</h1>
            <form onSubmit={add} id={'add'}>
                 <input type={'text'} ref={playerFirstname} required placeholder={'Firstname'} />
                 <input type={'text'} ref={playerLastname} required placeholder={'Lastname'} />
                 <input type={'number'} ref={playerAge} required placeholder={'Age'} />

                 <select  ref={playerRace}>
                     <option> Race</option>
                     {race.map((item,index)=><option key={index} defaultValue={item.type}>{item.type}</option>)}
                 </select>

                 <textarea ref={playerText} required placeholder="Text..." />
                 <br/>
                 <button type='submit' form='add'>Add</button>
            </form>
            <Link to={'/players'}> Users </Link>
    </div>
    )
}export default Main;