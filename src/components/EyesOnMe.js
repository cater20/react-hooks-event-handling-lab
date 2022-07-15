// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
return <button onFocus={focus} onBlur={blur}>Eyes On Me </button>

function focus(){
    console.log("Good!");

}
function blur(){
    console.log("Hey eyes on me !");
}
}
export default EyesOnMe