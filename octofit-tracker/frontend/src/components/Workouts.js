import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://congenial-robot-pwrx4jxpp9c6vjv-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Workouts</h2>
      </div>
      <div className="card-body">
        <ul>
          {workouts.map(workout => (
            <li key={workout.id}>{workout.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;
