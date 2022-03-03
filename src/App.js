import './App.scss';
import Main from './Components/Main/Main'
import Users from './Components/Users/Users'
import {Routes, Route} from 'react-router'
import UsersId from './Components/UsersId/UsersId';
// import 'bootstrap/dist/css/bootstrap.css' 

function App() {

  return (
    <div className='App'>
       <Routes>
         <Route path={'/'} exact element={<Main/>}/>
         <Route path={'/users'} exact element={<Users/>}/>
         <Route path={'/users/id'} exact element={<UsersId/>}/>
       </Routes>
    </div>
  );
}

export default App;
