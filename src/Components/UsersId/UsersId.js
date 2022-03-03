import {useEffect,useState,useRef} from 'react'

function UsersId(){

    const [users, setUsers] = useState([])
    const [disable, setDisable] = useState(true)
    const [firstname, setFirstname] = useState('')    
    const [lastname, setLastname] = useState('')    
    const [age, setAge] = useState()    
    const [raceType, setRaceType] = useState('')    
    const [text, setText] = useState('') 
    const [userChanged, setUserChanged] = useState([]) 

    useEffect(()=>{
        let usersList = localStorage.getItem('users')

    if (usersList) {
        let usersArray = JSON.parse(usersList)
        setUsers(usersArray)   
       }
    },[])

    const userFirstame = useRef()
    const userLastname = useRef()
    const userAge = useRef()
    const userRace = useRef()
    const userText = useRef()

    const change=(event)=>{
        event.preventDefault()
        setDisable(!disable)
    }

    const save=(event)=>{
        event.preventDefault()
        let changedUser = [{
            userFirstname:firstname,
            userLastname:lastname,
            userAge:age,
            userRace:raceType,
            userText:text
        }]
        setDisable(!disable)
        localStorage.setItem('users',JSON.stringify(changedUser))
        setUserChanged([...userChanged, ...changedUser])
    
    }

    return(
        <div className="main">
            <h1>User info</h1> 
        {
           disable ? <button form={'formSub'} type='submit' style={{float:'right'}} onClick={change}>change</button> :
             <button form={'formSub'} type='submit' style={{float:'right'}} onClick={save}>save</button>
        }
        <br/>
        <br/>

             {users.map((item, index)=>{return (
              <form key={index} id={'formSub'} onSubmit={change||save}>
                 <input type={'text'} ref={userFirstame} disabled={disable} defaultValue={item.userFirstname} onChange={(e)=>setFirstname(e.target.value )}/>
                 <input type={'text'} ref={userLastname} disabled={disable} defaultValue={item.userLastname} onChange={(e)=>setLastname(e.target.value)}/>
                 <input type={'number'} ref={userAge} disabled={disable} defaultValue={item.userAge} onChange={(e)=>setAge(e.target.value)}/>
                 <select disabled={disable} ref={userRace} onChange={(e)=>setRaceType(e.target.value)}>
                     <option defaultValue={item.userRace}>{item.userRace}</option>
                 </select>
                 <textarea ref={userText} disabled={disable} defaultValue={item.userText} onChange={(e)=>setText(e.target.value)}/>
             </form>
             ) })}  
         </div>
    )
}export default UsersId;