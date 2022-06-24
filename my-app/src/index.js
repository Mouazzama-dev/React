import ReactDOM from 'react-dom';

//render method needs 2 parameters, one is the html which has to be rendered and the other one is where it should be rendered 

// ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"))

//this can also be done by query selector
// ReactDOM.render(<h1>Hey!</h1>, document.querySelector("#root")) 

// function MainContent(){
//   return (
//     <h1> I'm learning react </h1>
//   )
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// )

//JSx is a function which returns us an object which interprets and used to create actual elements that shows up on screen 
// const element = <h1 className='header'> This is JSX</h1>
// console.log(element)
// ReactDOM.render(element,document.getElementById("root"))


//CHALLENGE 01

import React from 'react';

function MyPage() {
    return(
    <ol>
        <li>
            one
        </li>
        <li> 
            two
        </li>
    </ol>
)}

ReactDOM.render(< MyPage />, document.getElementById('root'))