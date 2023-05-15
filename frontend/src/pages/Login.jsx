import axios from 'axios'
import React, { useContext, useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const user = useContext("user")
    const handleSubmit = async (e) => {
        console.log(user)
        e.preventDefault()
        try {
            const loginData = {email, password}
            const res = await axios.post("http://localhost:4000/api/user/login",loginData)
            console.log(res.data.user)
            window.location.href = '/'
        } catch(e) {
            console.log(e.response.data.error)
            setError(e.response.data.error)
        }

    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label>Email:</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                
                <label>Password:</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                <button>Login</button>
                <div className={error ? 'error': ''}>
                    {error}
                </div>
            </form>
        </div>

    )
}

export default Login