import './App.scss';
import Main from './Components/Main/Main'
import {Routes, Route} from 'react-router'
import PlayersId from './Components/PlayersId/PlayerId';
import Players from './Components/Players/Players';

function App() {



  return (
    <div className='App'>
       <Routes>
         <Route path={'/'} exact={true} element={<Main/>}/>
         <Route path={'/players'} exact={true} element={<Players/>}/>
         <Route path={`/players/:id`} exact={true} element={<PlayersId/>}/>
       </Routes>
    </div>
  );
}

export default App;
