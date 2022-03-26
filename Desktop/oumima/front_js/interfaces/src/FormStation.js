import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "./Env"

export const FormStation = () => {

    const [state, setState] = useState({}) 
    const [reset, setReset] = useState(true);

    useEffect(() => {
        if(!reset) setReset(true);
    }, [reset])

    const handleChange = (e) => {
        setState({ ...state, [e.target.name] : e.target.value })
    }

    const submit = (e) => {
        console.log(state);
        e.preventDefault();
        axios.post(API_URL + '/utilisateur/register', state)
            .then(() => {
                alert('Station ajouté avec succès')
                setState({})
                setReset(false);
            })
            .catch(console.log)
    }

    return (
        <div className="container">
            <div className="row">
                {reset && (
                <div className="col" style={{ background : "white" }}>
                    <h1>Ajouter station</h1>
                    <form onSubmit={submit}>
                        <div>
                            <label htmlFor="">email</label>
                            <input name="email" onChange={handleChange}/>
                        </div>                        
                        <div>
                            <label htmlFor="">Nom_station</label>
                            <input name="Nom_station" onChange={handleChange}/>
                        </div>                        
                        <div>
                            <label htmlFor="">type_lavage</label>
                            <input name="type_lavage" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">latitude</label>
                            <input name="latitude" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">longitude</label>
                            <input name="longitude" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">statut</label>
                            <input name="statut" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">default</label>
                            <input name="default" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Role</label>
                            <input name="Role" onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Mot de passe</label>
                            <input name="password" onChange={handleChange}/>
                        </div>
                        <button>Enregistrer</button> 
                    </form>
                </div>
                )}
            </div>
        </div>
    )
}