import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "./Env";
import { Link } from "react-router-dom";

export const Stations = () => {

    const [stations, setStations] = useState([]);

    useEffect(() => {
        axios.get(API_URL + '/utilisateur/getAll')
            .then((res) => {
                setStations(res.data)
            })
    }, [])

    const confirmer = (id) => {
        // Appel api confirmation
    }

    return (
        <div className="container"  style={{ background : 'white' }}>
            <div className="row">
                <div className="col">
                    <Link to={"/stations/ajout"}>
                        <button>Ajouter une station</button>
                    </Link>
                    <h1>Liste des stations</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>email</th>
                                <th>Nom_station</th>
                                <th>type_lavage</th>
                                <th>latitude</th>
                                <th>longitude</th>
                                <th>statut</th>
                                <th>default</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stations.map((station) => (
                                <tr key={station._id}>
                                    <td>{station.email}</td>
                                    <td>{station.Nom_station}</td>
                                    <td>{station.type_lavage}</td>
                                    <td>{station.latitude}</td>
                                    <td>{station.longitude}</td>
                                    <td className={station.statut ? "text-success" : "text-danger"}>
                                        {station.statut ? 'Confirmé' : 'En cours'}
                                    </td>
                                    <td>{station.default}</td>
                                    <td>{station.Role}</td>
                                    <td>
                                        <button onClick={() => confirmer(station._id)}>Confimer</button>
                                    </td>
                                </tr>
                            ))}                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}