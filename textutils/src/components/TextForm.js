import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        //console.log("Lowercase was clicked" + text);
        let newText = ('');
        setText(newText)
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }

    const handleCopy =()=>{
        //console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

    const handleExtraSpaces= () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea class="form-control" value={text}  onChange={handleOnChange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p> {text}</p>
    </div>
    </>
  )
}
