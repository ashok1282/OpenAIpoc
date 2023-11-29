import React,{useState} from "react";
import './App.css'

import Button from "./Button";

function Display(props){
    



    return(
        <div className='totalContent'>
      <div className='displayQuestion'>
      <div className='blackgpt'>
        <img className='blackgptImg' src='./src/assets/questionlogo.jpg' />
      </div>
     
        
          <div className="question">
        <p style={{color: "black"}}>{props.question}</p>
        </div>
        </div>
      
      <div className='displayAnswer'>
      <div className='greengpt'>
        <img className='grenngptImg' src='./src/assets/answerlogo.png' />
      </div>
        <h2></h2>
        <div className='responseAnswer'>
        
          {props.answer &&
          <div>
            <pre style={{ wordWrap: 'break-word' }}>{props.answer}</pre>
            
          
          </div>}
        </div>
       <div>
       <Button/>
       </div>
        {/* <textarea
          value={answer}
          readOnly
          style={{ width: '300px', height: '280px', whiteSpace: 'pre-line' }}
          wrap="soft"
        />    */}
        </div>
        </div>
    
    )
}
export default Display;