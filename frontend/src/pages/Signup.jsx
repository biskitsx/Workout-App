import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.post("http://localhost:4000/api/user/signup",{email, password})
            console.log(user)
            window.location.href = '/'
        } catch(e) {
            const errors = e.response.data.msg
            setError(errors)
        }
    }

    return (
        <div>
            <form className="signup" onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <label>Email:</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <label>Password:</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                <button>Sign Up</button>
                <div className={error ? 'error': ''}>
                    {error}
                </div>
            </form>
        </div>
    )
}

export default Signup