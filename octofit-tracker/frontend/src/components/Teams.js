import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://congenial-robot-pwrx4jxpp9c6vjv-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Teams</h2>
      </div>
      <div className="card-body">
        <ul>
          {teams.map(team => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;
