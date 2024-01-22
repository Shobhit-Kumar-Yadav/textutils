import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle]= useState({
        color:'black',
        background:'white'

    })
    const[btntext, setBtntext] = useState("Enable Dark Mode")

     const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
            setBtntext("Enable Light mode")
        }
        else{
            setMyStyle({
                color: 'black',
                background: 'white'
            })
            setBtntext("Enable Dark Mode");
        }
        }
    

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle} >
                    <div className="accordion-item" style={myStyle} >
                        <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Analyze Your text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle} >
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use </strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle} >
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible </strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
            </div>
        </div>  
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
        
    </div>
  )
  }
