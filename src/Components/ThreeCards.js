import { Link } from 'react-router-dom'


export default function ThreeCard({ setQuestion }) {
    //this handles any change made to the input field, and set the input value to the question state in the parent component Header.js
    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <section class="section card-page">
            <h2>Three Card Reading</h2>
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
                {/* Link to ThreeCardResults components */}
                <button><Link to="/three-card-results">Get Reading</Link></button>
            </form>
        </section>
    )

}