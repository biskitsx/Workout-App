import React, { useEffect, useState } from "react";
import Workout from "../components/Workout";
import WorkoutForm from "../components/WorkoutForm";
function Home() {

    const [workouts, setWorkouts] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:4000/api/workouts/');
          const json = await response.json();
          setWorkouts(json);
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    }, []);

    return (
      <div className="home">
        <div className="workouts">
            {workouts.map((element)=>{
                return <Workout key={element._id} workout={element}/>
            })}
        </div>
        <WorkoutForm/>
      </div>
    );
  }
  
  export default Home;
  