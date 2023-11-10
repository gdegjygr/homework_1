import React, {useState} from "react"


// export default function MyApp() {
//   const[count, setCount] = useState(0)

//   function handleClick(){
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1>ARASAKA</h1>
//       <MyButton count = {count} onClick = {handleClick}/>
//       <MyButton count = {count} onClick = {handleClick}/>
//     </div>
//   )
// };


// function MyButton({count, onClick}){
//   return (
//     <button onClick = {onClick}>
//       You have {count} clicks!
//     </button>
//   )
// }


export default function MyApp(){
  const[count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1 * 2)
  }

  return (
    <div>
      <h2>ARASAKA</h2>
      <MyButton count = {count} onClick = {handleClick}/>
      <MyButton count = {count} onClick = {handleClick}/>
    </div> 
  )
}


function MyButton({count, onClick}) {
  return <button onClick={onClick}>You have {count} clicks!</button>
}
