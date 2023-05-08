import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function Workout({workout}) {
    const {title, reps, load, createdAt} = workout
    
    async function handleClick(e) {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
                method: 'delete'
            })
            const json = await response.json()
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div className="workout-details">
            <h4>{title}</h4>
            <p><strong>Load (kg): </strong>{load}</p>
            <p><strong>Reps: (kg): </strong>{reps}</p>
            <p>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
            {/* <span onClick={handleClick}>delete</span> */}
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default Workout