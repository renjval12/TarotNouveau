import { Link } from 'react-router-dom'

export default function FiveCard({ setQuestion }) {
    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="card-page section">
            <h2>Five Card Reading</h2>
            <form onSubmit={handleSubmit}>
                <label className="ask-cards-label" htmlFor="question-input">Question: </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="question-input"
                    id="question"
                    placeholder="Enter Question"
                    required
                />
                <button><Link to="/five-card-results">Get Reading</Link></button>
            </form>
        </div>
    )

}