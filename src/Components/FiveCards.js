import { Link } from 'react-router-dom'
import React, { useRef, useContext } from "react";
import { QuestionContext } from './Header';

// export const QuestionContext = createContext()

export default function FiveCard({setQuestion}) {
    // const [question, setQuestion] = useState('')
    // const {setQuestion} = useContext(QuestionContext)
    let questionRef = useRef()
    const handleChange = () => {
        setQuestion(questionRef.current.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(tarotData)
    }
    return (
        <main>
            <h2>Five Card Reading</h2>
            <form onSubmit={handleSubmit}>
                <label className="ask-cards-label" htmlFor="question-input">Question: </label>
                <input
                    onChange={handleChange}
                    ref={questionRef}
                    type="text"
                    name="question-input"
                    id="question"
                    placeholder="Enter Question"
                    required
                />
                    <Link to="/five-card-results"><button>Get Reading</button></Link>

            </form>
        </main>
    )

}