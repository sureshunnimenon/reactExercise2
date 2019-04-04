import React from 'react'
import Char from './char'

const InputField= (props) => {
  const inLength = props.val.length;
  const msg = inLength > 5 ? "Text Okay length" : "Text Too short"  
   
  return (
    <div>
        <input type="text" onChange={props.changed}/>
        <p> The entered string is of length: {props.val.length} </p>
        <p> The string entered is: {props.val}</p>
        <p> {msg}</p>
        <p> 
        {
            props.val.split('').map((ch, index) => {
                return(
                <Char value={ch} key={index} clicked ={props.clk({index})}> </Char>  )           
            }
            )
        }
        </p>          
    </div>
  )
}

export default InputField
