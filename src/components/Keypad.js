// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handlechange(){
console.log(onchange);
    }
return(
    <div>
        <input
      type={"password"}  
      name="password"
       
       onChange={handlechange}
       placeholder="Entering password..."
       />
    </div>
)

}

export default Keypad