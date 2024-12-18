import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("dark");
  const [textMode,setTextMode]=useState("light");
  const [textPageMode,setTextPageMode]=useState("dark");
  const [alert, setAlert]=useState(null);
  const [colourMode,setColourMode]=useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      setTextMode("light");
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils- Dark Mode"
    }
    else{
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils"
    }
  }
 
  const colourToggleMode=()=>{
    if (colourMode===null){
      setColourMode("green")
      document.body.style.backgroundColor="#1B4D3E";
      setTextPageMode("light")
      document.title="TextUtils- Green Mode"
    }
    else{
      setColourMode("light")
      document.body.style.backgroundColor="white";
      setTextPageMode("dark");
      document.title="TextUtils"
    }

  }
    
  return (
    <>
<Router> 
<Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode} colourToggleMode={colourToggleMode}/>
<Alert alert={alert}></Alert>
<div class="container my-3">
<Routes>
  <Route path="/about" element={<About />}>
  </Route>
  <Route path='/' element={ <TextForm text="Enter the text below:" showAlert={showAlert} textPageMode={textPageMode}/>}>
  </Route>
</Routes>
</div>
</Router>  

</>
  );
}

export default App;
