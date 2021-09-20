import React, { useState } from "react";
export default function Stars() {
    const [isResultShowing, setIsResultShowing] = useState(false);
    const [isFormShowing, setIsFormShowing] = useState(false);

    //stores the name and birthday of the user
    const [userInfo, setUserInfo] = useState({ name: '', birthday: '', })

    // stores the data retrieved from the Aztro API after fetch request
    const [aztroData, setAztroData] = useState([])

    //stores the month and day of the users birthday, 
    const [birthdayMonth, setBirthdayMonth] = useState()
    const [birthdayDay, setBirthdayDay] = useState()

    //stores the zodiac sign of the user 
    const [zodiac, setZodiac] = useState('')
    //function that handles the change of the input fields in the form
    const handleChange = (event) => {
        // changes values in the state to birthday the user inputs
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value })

        //changes the values in the birthdayMonth & birthdayYear state to the values in the userInfo
        let month = Number(userInfo.birthday.split('-')[1])
        setBirthdayMonth(month)
        let day = Number(userInfo.birthday.split('-')[2])
        setBirthdayDay(day)
    }

    let sign;
    const handleSubmit = (event) => {
        event.preventDefault()
        /* switch statement to determine the user's zodiac sign, based on what they submitted*/
        switch (birthdayMonth) {
            case 1:
                if (birthdayDay <= 20) {
                    sign = 'Capricorn';
                    break
                }
                else {
                    sign = "Aquarius";
                    break
                }
            case 2:
                if (birthdayDay <= 19) {
                    sign = "Aquarius";
                    break
                }
                else {
                    sign = "Pisces";
                    break
                }
            case 3:
                if (birthdayDay <= 20) {
                    sign = "Pisces";
                    break
                }
                else {
                    sign = "Aries";
                    break
                }
            case 4:
                if (birthdayDay <= 20) {
                    sign = "Aries";
                    break
                }
                else {
                    sign = "Taurus";
                    break
                }
            case 5:
                if (birthdayDay <= 21) {
                    sign = "Taurus";
                    break
                }
                else {
                    sign = "Gemini";
                    break
                }
            case 6:
                if (birthdayDay <= 22) {
                    sign = "Gemini";
                    break
                }
                else {
                    sign = "Cancer";
                    break
                }
            case 7:
                if (birthdayDay <= 22) {
                    sign = "Cancer";
                    break
                }
                else {
                    sign = "Gemini";
                    break
                }
            case 8:
                if (birthdayDay <= 23) {
                    sign = "Gemini";
                    break
                }
                else {
                    sign = "Virgo";
                    break
                }
            case 9:
                if (birthdayDay <= 23) {
                    sign = "Virgo";
                    break
                }
                else {
                    sign = "Libra";
                    break
                }
            case 10:
                if (birthdayDay <= 23) {
                    sign = "Libra";
                    break
                }
                else {
                    sign = "Scorpio";
                    break
                }
            case 11:
                if (birthdayDay <= 22) {
                    sign = "Scorpio";
                    break
                }
                else {
                    sign = "Sagittarius";
                    break
                }
            case 12:
                if (birthdayDay <= 21) {
                    sign = "Sagittarius";
                    break
                }
                else {
                    sign = "Capricorn";
                    break
                }
            default:
                sign = 'Incorrect input';
                break
        }
        setZodiac(sign)
        const URL = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`;
        fetch(URL, { method: 'POST' })
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                setAztroData(result)
            }
            );

    }



    return (
        <main>
            <h1>Ask the Stars</h1>
            <div id="ask-stars-intro" class="intro">
                <h2>“Watch the stars, and see yourself running with them.”</h2>
                <button onClick={() => setIsFormShowing(!isFormShowing)}>Start</button>
            </div>
            {isFormShowing && <form onSubmit={handleSubmit}>
                <div className="ask-stars-input">
                    <label className="ask-stars-label" htmlFor="birthday">Birthday: </label>
                    <input
                        onChange={handleChange}
                        type="date"
                        min="2003-01-01"
                        name="birthday-input"
                        id="birthday"
                        required />
                </div>
                <div className="ask-stars-input">
                    <label className="ask-stars-label" htmlFor="name">Name: </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name-input"
                        id="name"
                        placeholder="Enter Name"
                        required />
                </div>

                {/* <button>Get Results</button> */}
                <button onClick={() => setIsResultShowing(!isResultShowing)}>Show Results</button>
            </form>}
            {isResultShowing && <div>
                <h1>{userInfo.name}</h1>
                <h2>{zodiac}</h2>
                <p> Current Date: {aztroData.current_date}</p> <br />
                Compatibility: {aztroData.compatibility} <br />
                Lucky Number: {aztroData.lucky_number} <br />
                Lucky Time: {aztroData.lucky_time} <br />
                Color: {aztroData.color} <br />
                Date Range: {aztroData.date_range} <br />
                Mood: {aztroData.mood} <br />
                Horoscope: {aztroData.description} <br />

                <button onClick="window.location.reload()">New Horoscope</button>
            </div>}
        </main>
    )
}
