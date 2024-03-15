import React, {useState} from 'react'

export default function TextForm(props) {
    const handupClick=()=>{
        console.log("Uppercase is clicked " + text);
        let newtext = text.toUpperCase();

        settext(newtext)
    }
    const handupoClick=()=>{
        console.log("Uppercase is clicked " + text);
        let newtext = text.toLowerCase();

        settext(newtext)
    }
    const handupclear=()=>
    {
        let newtext ='';
        settext(newtext)
    }
    const handupinvserse=()=>
    {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        settext(newtext);
    }
const handupCaptail=()=>
{
    // let newtext=""
    for(let i=0;i<text.length;i++)
    {   
        if(text[1].toUpperCase){

        }
    }
}
const handupcopy=()=>
{
    // let newtext=""
        var text=document.getElementById("myBox");
            text.select();
           text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
}

    const [text, settext]= useState('Enter the text');
    // text="yogesh"; you can't declear this you want to put this in a Function
   // settext=("yogesh");
   const handleOnChange = (event)=>
   {
    console.log("onchange");
    settext(event.target.value)
   }
  return (
   <>
   <div>
   <h1>{props.heading}</h1>
   <div className="container mb-3">
    <textarea  id="myBox" className="form-control" value={text} onChange={handleOnChange} cols="180" rows="8"></textarea>
   </div>
   <div> <button className="btn btn-primary mx-2" onClick={handupClick}> Convert into Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handupoClick}> Convert into Uppercase</button> 
   <button className="btn btn-primary mx-3" onClick={handupclear}> Clear </button> 
   <button className="btn btn-primary mx-3" onClick={handupinvserse}> Resvers </button> 
   <button className="btn btn-primary mx-3" onClick={handupCaptail}> Frist letter Captial </button> 
   <button className="btn btn-primary mx-3" onClick={handupcopy}>Copy Text </button> 

   </div>
   </div>
   <div className="container my-5">
    <h1>Your Text Summary</h1>
    <p>word={text.split(" ").length} and alphate= {text.length}</p>
    <p>word={0.008*text.split(" ").length} mintues to word </p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
  
  
   </>
  )
}
