import React, { useState, useReducer, useEffect } from "react";
import Manifestations from "./Manifestations";

export const ACTIONS = {
    ADD_MANIFESTATION: 'add-manifestation',
    TOGGLE_MANIFESTATION: 'toggle-manifestation',
    DELETE_MANIFESTATION: 'delete-manifestation',

}
function reducer(manifestations, action) {
    switch (action.type) {
        case ACTIONS.ADD_MANIFESTATION:
            return [...manifestations, newManifestation(action.payload.name)]
        case ACTIONS.TOGGLE_MANIFESTATION:
            return manifestations.map((manifestation) => {
                if (manifestation.id === action.payload.id) {
                    return { ...manifestation, complete: !manifestation.complete }
                }
                return manifestation
            })
        case ACTIONS.DELETE_MANIFESTATION:
            return manifestations.filter((manifestation) => manifestation.id !== action.payload.id)
        default: return manifestations
    }
}

function newManifestation(name) {
    return { id: Date.now(), name: name, complete: false }
}



export default function ManifestAffirm() {
    const [manifestations, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    const [affirmation, setAffirmation] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_MANIFESTATION, payload: { name: name } })
        setName('')
    }

    console.log(manifestations)

    useEffect(() => {
        console.log('useEffect runs')
        //fetch call to Affirmations API
        fetch('https://dulce-affirmations-api.herokuapp.com/affirmation')
            .then(response => response.json())
            .then(result => {
                //set the affirmation state, to the result of the function call from the Tarot-api.
                // console.log(result[0].phrase)
                setAffirmation(result[0].phrase)
            }
            )
    }, [])

    return (
        <div id="mani-and-affirm">
            <section id="manifestations-section">
                <h1>Manifestations</h1>
                <p>Enter what you want for your life and maybe you just might get it...</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="manifestation"></label>
                    <input id="manifest-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="I want to be healthy..." required />
                </form>
                {manifestations.map(manifestation => {
                    return <ul>
                        <Manifestations key={manifestation.id} manifestation={manifestation} dispatch={dispatch} />
                    </ul>
                })}
            </section>
            <section id="affirmations-section">
                <h1>Affirmations</h1>
                <p>{affirmation}.</p>
            </section>
        </div>
    )
}