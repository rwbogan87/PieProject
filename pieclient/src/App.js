import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';
import Pies from './Components/Pies/Pies';

//https://player.vimeo.com/video/345273926
//https://player.vimeo.com/video/345275808

function App() {
   //(variable - single value), (function - updates variable) //
  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);
  // console.log(setSessionToken);
  const viewConductor=()=>{
    return sessionToken === undefined ? <Auth setSession={setSessionToken}/> : <Pies token={sessionToken}/>
  }


  return (
    <div className="App">
      {/*sessionToken*/}
      <Navbar setSession={setSessionToken}/>
      {viewConductor()}
    </div>
  );
}

export default App;
