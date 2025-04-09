import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://congenial-robot-pwrx4jxpp9c6vjv-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Activities</h2>
      </div>
      <div className="card-body">
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Activities;
