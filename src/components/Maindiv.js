import React from 'react'


const today = new Date();
console.log(today);
let time = today.getHours();
let greet;
const greetcolor = {
  color : 'pink'  

}

  if(time>12&&time<=18){
    greetcolor.color = 'yellowgreen';
    greet = "Good afternoon"  
  }
  else if(time>18&&time<=24){
    greetcolor.color = 'black';
    greet = "Good night";  
  }
  else if(time<24&&time<=12){
    greetcolor.color = 'blue';
    greet = "Good morning";  
  }

console.log(greetcolor);
console.log(time);
export default function Maindiv() {

 
  return (
    <>
     <div className="main-div" >
        <h1 className="text-div">Hello Sir,<span className='greet' style={greetcolor}>{greet}</span> </h1>
      </div>
    </>
  )
}
