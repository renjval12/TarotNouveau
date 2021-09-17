import React, { useState } from "react";
export default function CrystalBall() {
    const [question, setQuestion] = useState('')
    const [userAnswer, setUserAnswer] = useState('')
    const [isResultShowing, setIsResultShowing] = useState(false);

    const handleChange = (event) => {
        setQuestion(event.target.value)
        console.log(question)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let uri = "https://8ball.delegator.com/magic/JSON/" + question;
        fetch(uri)
            .then(response => response.json())
            .then(result => {
                setUserAnswer(result)
                console.log(userAnswer.magic.answer)
            });
    }


    return (
        <main>
            <section id="ask-crystal-ball-intro" className="white-text">
                <h1>Consult with the Crystal Ball to know what to do next</h1>
                <button>Start</button>
            </section>
            <section className="ask-crystal-bg">
                <form onSubmit={handleSubmit}>
                    <label htmlFor=""></label>
                    <textarea onChange={handleChange} id="question" rows="2" cols="50" required></textarea>
                    <button onClick={() => setIsResultShowing(!isResultShowing)}>Ask</button>
                </form>
                {isResultShowing && <div>
                    <p> Current Date: {}</p> 
                </div>}
            </section>
        </main >
    )
}