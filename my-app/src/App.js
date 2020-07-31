import React, { useState } from 'react';
import './App.css';
import GetAllTeams from './components/GetAllTeams';
import GetOneTeam from './components/GetOneTeam';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {

  const [footballTeam, setFootballTeam] = useState({})

  const getOneTeam = team => {
    setFootballTeam(team);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Redirect exact from="/" to="/teams" />
        <Route exact path='/teams' render={() => <GetAllTeams getOneTeam={getOneTeam} />} />
        <Route exact path='/teams/:id' render={() => <GetOneTeam oneTeam={footballTeam} />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
