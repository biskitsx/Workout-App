import React, { useState } from 'react'

function WorkoutForm() {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyField,setEmptyField] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const workout = {title, load, reps}
            const response = await fetch('http://localhost:4000/api/workouts',{
                method: "post",
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()

            if (!response.ok) {
                console.log(json.error)
                setError(json.error)
                setEmptyField(json.EmptyFields)
            } else {
                console.log("new workout added", json)
                setError(null)
                setTitle('')
                setLoad('')
                setReps('')
            }

        } catch(e) {
            setError(e)
        }
    }

  return (
    <div>
        <form  className='create' onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label htmlFor="">Excersize Title:</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} className={emptyField.includes('title') ? 'error' :'' }/>
            <label htmlFor="">Load (in kg): </label>
            <input type="number" onChange={(e)=>{setLoad(e.target.value)}} value={load} className={emptyField.includes('load') ? 'error' :'' }/>
            <label htmlFor="">Reps:</label>
            <input type="number" onChange={(e)=>{setReps(e.target.value)}} value={reps} className={emptyField.includes('reps') ? 'error' :'' }/>
            
            <button>SUBMIT</button>
        </form>
        <div className={error ? 'error': ''}>
            {error}
        </div>

    </div>

  )
}

export default WorkoutForm