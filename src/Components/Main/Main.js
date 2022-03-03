import {Link} from 'react-router-dom'
import {useState, useRef} from 'react'
import {useNavigate} from "react-router"

function Main(){
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])    
       
    const navigate= useNavigate()

    const race =[
        {type:'Asian'},
        {type:'Indian'},
        {type:'African'},
        {type:'Afro-American'},
        {type:'Evropean'},
    ]

    const userFirstname = useRef()
    const userLastname = useRef()
    const userAge = useRef()
    const userRace = useRef()
    const userText = useRef()


    const add= (event)=>{  
        event.preventDefault()
        let newUser=[{
            userFirstname : event.target[0].value,
            userLastname : event.target[1].value,
            userAge : event.target[2].value,
            userRace : event.target[3].value,
            userText : event.target[4].value
        }]

        localStorage.setItem('users',JSON.stringify(newUser))
        users.push(newUser)
        setUsers([...users, newUser])    
        navigate('/users')

    }

    return(
        <div className="main">

            <h1> Welcome !</h1>
            <form onSubmit={add} id={'add'}>
                 <input type={'text'} ref={userFirstname} required placeholder={'Firstname'} />
                 <input type={'text'} ref={userLastname} required placeholder={'Lastname'} />
                 <input type={'number'} ref={userAge} required placeholder={'Age'} />

                 <select  ref={userRace}>
                     <option> Race</option>
                     {race.map((item,index)=><option key={index} defaultValue={item.type}>{item.type}</option>)}
                 </select>

                 <textarea ref={userText} required placeholder="Text..." />
                 <br/>
                 <button type='submit' form='add'>Add</button>
            </form>
            <Link to={'/users'}> Users </Link>

        </div>
    )
}export default Main;