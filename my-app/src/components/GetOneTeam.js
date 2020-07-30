import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetOneTeam(props) {
    const [players, setPlayers] = useState([]);
    const oneTeam = props.oneTeam

    useEffect(() => {
        getPlayersByTeamId()
    })

    const getPlayersByTeamId = () => {
        axios({
            "method": "GET",
            "url": `https://api-football-v1.p.rapidapi.com/v2/players/squad/${oneTeam.id}/2018-2019`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "29553a89dfmshcabc96ff167ca78p1c06e0jsn6fc330e0f35a",
                "useQueryString": true
            }
        })
            .then((res) => {
                setPlayers(res.data.api.players)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <h1>{oneTeam.name}</h1>
            <img src={oneTeam.crestUrl} alt="team flag"
            style={{float: "left"}} />


            <div 
            style={{border:"1px solid black"}}>
            Founded: <h3>{oneTeam.founded}</h3>
            Address: <h3>{oneTeam.address}</h3>
            <a href={oneTeam.website}>Click Here To The Team Website... </a>
            </div>
        

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Players Name</th>
                        <th scope="col">Shirt Number </th>
                    </tr>
                </thead>
                <tbody >
                    {players.map((player, i) => (
                        <tr key={i} >
                            <td>{player.player_name}</td>
                            <td>{player.player_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetOneTeam;