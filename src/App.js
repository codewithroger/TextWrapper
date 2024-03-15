
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Form from './components/Form';
import TextForm from './components/TextForm';
// import Aboutus from './components/Aboutus';
import Alert from './components/Alert';

function App() {
  const [Mode,setMode]=useState("ligth mode") ;
  const[alert,setalert]=useState(null);
  const showAlert =(message,type)=>
  {
    setalert({
      msg: message,
      type:type
    })
  }
  const toggleMode=()=>
  {
    if(Mode==='ligth mode')
    {
     
      setMode('dark');
    document.body.style.background='black';
    showAlert("this is Dark mode","success");
    }
    else{
      setMode('white');
      document.body.style.background='white'
      showAlert("this is white mode","success");

    }
  }
 
  return (
<>

{/* In this we are using props that change the Navbar thing like Name  */}
<Navbar title="TextWrapper" mode={Mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>

<div className="container my-3">
<TextForm heading="Analyze the Text "/>
</div>
  {/* <div  className="container">
<Aboutus/>
</div> */}
</>
  );
}

export default App;
