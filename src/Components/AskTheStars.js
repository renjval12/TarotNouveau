import React, { useState } from "react";
export default function Stars() {
    const [isResultShowing, setIsResultShowing] = useState(false);
    const [isFormShowing, setIsFormShowing] = useState(false);

    // stores the data retrieved from the Aztro API after fetch request
    const [aztroData, setAztroData] = useState([])

    //stores the name and birthday of the user
    const [userInfo, setUserInfo] = useState({ name: '', birthday: '', })

    //stores the month and day of the users birthday, 
    const [birthdayMonth, setBirthdayMonth] = useState()
    const [birthdayDay, setBirthdayDay] = useState()

    //function that handles the change of the input fields in the form
    const handleChange = (event) => {
        // changes values in the state to birthday the user inputs
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value })

        //changes the values in the birthdayMonth & birthdayYear state to the values in the userInfo
        setBirthdayMonth(Number(userInfo.birthday.split('-')[1]))
        setBirthdayDay(Number(userInfo.birthday.split('-')[2]))
    }

    /* switch statement to determine the user's zodiac sign, based on what they submitted*/
    let sign;
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

    const handleSubmit = (event) => {
        event.preventDefault()
        const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;

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
            <div id="ask-stars-intro">
                <h2>“Watch the stars, and see yourself running with them.”</h2>
                <button onClick={() => setIsFormShowing(!isFormShowing)}>Start</button>
            </div>
            {isFormShowing && <form onClick={handleSubmit}>
                <div className="ask-stars-input">
                    <label className="ask-stars-label" htmlFor="name">Name: </label>
                    <input onChange={handleChange} type="text" name="name-input" id="name" placeholder="Enter Name" required />
                </div>
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
                {/* <button>Get Results</button> */}
                <button onClick={() => setIsResultShowing(!isResultShowing)}>Show Results</button>
            </form>}
            {isResultShowing && <div>
                <h1>{userInfo.name}</h1>
                <h2>{sign}</h2>
                <p> Current Date: {aztroData.current_date}</p> <br />
                Compatibility: {aztroData.compatibility} <br />
                Lucky Number: {aztroData.lucky_number} <br />
                Lucky Time: {aztroData.lucky_time} <br />
                Color: {aztroData.color} <br />
                Date Range: {aztroData.date_range} <br />
                Mood: {aztroData.mood} <br />
                Horoscope: {aztroData.description} <br />
            </div>}
        </main>
    )
}


// switch (userInfo.birthday)
//             {
//                 case 1: if(date.Day <= 20)
//                     { element = "Earth"; return "Capricorn"; }
//                     else
//                     { element = "Air"; return "Aquarius"; }
//                 case 2: if (date.Day <= 19)
//                     { element = "Air"; return "Aquarius"; }
//                     else
//                     { element = "Water"; return "Pisces"; }
//                 case 3: if (date.Day <= 20)
//                     { element = "Water"; return "Pisces"; }
//                     else
//                     { element = "Fire"; return "Aries"; }
//                 case 4: if (date.Day <= 20)
//                     { element = "Fire"; return "Aries"; }
//                     else
//                     { element = "Earth"; return "Taurus"; }
//                 case 5: if (date.Day <= 21)
//                     { element = "Earth"; return "Taurus"; }
//                     else
//                     { element = "Air"; return "Gemini"; }
//                 case 6: if (date.Day <= 22)
//                     { element = "Air"; return "Gemini"; }
//                     else
//                     { element = "Water"; return "Cancer"; }
//                 case 7: if (date.Day <= 22)
//                     { element = "Water"; return "Cancer"; }
//                     else
//                     { element = "Fire"; return "Leo"; }
//                 case 8: if (date.Day <= 23)
//                     { element = "Fire"; return "Leo"; }
//                     else
//                     { element = "Earth"; return "Virgo"; }
//                 case 9: if (date.Day <= 23)
//                     { element = "Earth"; return "Virgo"; }
//                     else
//                     { element = "Air"; return "Libra"; }
//                 case 10: if (date.Day <= 23)
//                     { element = "Air"; return "Libra"; }
//                     else
//                     { element = "Water"; return "Scorpio"; }
//                 case 11: if (date.Day <= 22)
//                     { element = "Water"; return "Scorpio"; }
//                     else
//                     { element = "Fire"; return "Sagittarius"; }
//                 case 12: if (date.Day <= 21)
//                     { element = "Fire"; return "Sagittarius"; }
//                     else
//                     { element = "Earth"; return "Capricorn"; }
//                 default:
//                     element = ""; return "";
//             }
//         }