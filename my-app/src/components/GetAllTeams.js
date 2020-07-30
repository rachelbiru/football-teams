import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import loading_image  from '../loading_image.jpg'


function GetAllTeams(props) {
    const [footballTeams, setFootballTeams] = useState([])
    const [navigation, setNavigation] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getFootballTeams();
    })

    const getFootballTeams = () => {
        axios({
            "method": "GET",
            "url": "http://api.football-data.org/v2/teams",
            "headers": {
                'X-Auth-Token': '22fd03e9c4814e9c8279d09f7d3c8220'
            }
        })
            .then((res) => {
                setFootballTeams(res.data.teams);
                 setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if(isLoading) {
        return <img src={loading_image} alt="team flag"/>
    }

    if (navigation) {
        return <Redirect to='teams/:id' />
    }

    return (
        <div>
            <h1>Football-Teams</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Founded</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody >
                    {footballTeams.map((team, i) => (
                        <tr onClick={() => {
                            props.getOneTeam(team);
                            setNavigation(true);

                        }} key={i} >
                            <td>{team.name}</td>
                            <td>{team.founded}</td>
                            <td>{team.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default GetAllTeams;