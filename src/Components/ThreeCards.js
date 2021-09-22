import { Link } from 'react-router-dom'


export default function ThreeCard({ setQuestion }) {
    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <main>
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

                <Link to="/three-card-results"><button>Get Reading</button></Link>
            </form>
        </main>
    )

}