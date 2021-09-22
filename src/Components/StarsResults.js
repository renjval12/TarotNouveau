import React from "react";
import { Link } from "react-router-dom";


export default function StarsResults({ userInfo, zodiac, aztroData }) {
    
return (
        <main>
            <h1>{userInfo.name}</h1>
            <h2>{zodiac}</h2>
            Current Date: {aztroData.current_date} <br />
            Compatibility: {aztroData.compatibility} <br />
            Lucky Number: {aztroData.lucky_number} <br />
            Lucky Time: {aztroData.lucky_time} <br />
            Color: {aztroData.color} <br />
            Date Range: {aztroData.date_range} <br />
            Mood: {aztroData.mood} <br />
            Horoscope: {aztroData.description} <br />
            <form>
                <Link to="/horoscope-reading"><button>New Horoscope</button></Link>
            </form>
        </main>
    )
}
