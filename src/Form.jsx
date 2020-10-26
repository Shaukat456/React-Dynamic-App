import React from 'react'
import { useState } from 'react'
import css from './index.css'


const App=()=>{

    //defining state
    const state=useState();
    const [name,setname]=useState()
    const [fullname, setfullname]=useState()

    const inputfun=(e)=>{
        setname(e.target.value)
    }
    const click=()=>{
        setfullname(name)
    }
     
    return(
        <>
        <div style={css}>
        <h1> Hi {fullname}</h1>
        <input  onChange={inputfun} type="text" value={name} />
        <button onClick={click} >CLick me </button>
        </div>
        </>    
    )
}
export default App;
