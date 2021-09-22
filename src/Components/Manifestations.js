import React from 'react'
import { ACTIONS } from './ManifestationsAndAffirmations'

export default function Manifestations({ manifestation, dispatch }) {
    return (

        <li id="manifestation-item">
            <span style={{ color: manifestation.complete ? 'gray' : 'black' }}>
                {manifestation.name}  
            </span>
            <button onClick={() => dispatch(
                {
                    type: ACTIONS.TOGGLE_MANIFESTATION,
                    payload: { id: manifestation.id }
                }
            )
            }>Toggle</button>
            <button onClick={() => dispatch(
                {
                    type: ACTIONS.DELETE_MANIFESTATION,
                    payload: { id: manifestation.id }
                }
            )
            }>Delete</button>
        </li>
    )
}
