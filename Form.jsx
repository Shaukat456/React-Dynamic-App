import React from 'react'
import { useState } from 'react'
import css from './index.css'


const App = () => {

    

    const [name, setname] = useState()
    const [fullname, setfullname] = useState()
    // const [email, setemail] = useState('')



    const InputEvent = (v) => {
        setfullname(name)
        setname(v.target.value)
        // setemail(v.target.value)
    }
    const onSubmits = (event) => {
        event.preventDefault();
        setfullname(name);
    }
    return (
        <div style={css}>
            <form onSubmit={onSubmits}>
            <h1 > HELLO  {fullname}</h1>
            <input type='text' placeholder='enter name' onChange={InputEvent} value={name} />
            {/* <input type='text' placeholder='enter Email' onChange={InputEvent} value={email} /> */}
            <button type='submit'>Click me</button>
            </form>
        </div>
    )
}

export default App;