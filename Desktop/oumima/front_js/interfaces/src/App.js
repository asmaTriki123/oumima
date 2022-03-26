
import Login from './Login'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Stations } from './Stations';
import { FormStation } from './FormStation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='stations/ajout' element={<FormStation/>}></Route>
        <Route path='stations' element={<Stations/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
