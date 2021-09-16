let month = [12]



switch (birthday) {
    case 1: if (date.Day <= 20) { element = "Earth"; return "Capricorn"; }
    else { element = "Air"; return "Aquarius"; }
    case 2: if (date.Day <= 19) { element = "Air"; return "Aquarius"; }
    else { element = "Water"; return "Pisces"; }
    case 3: if (date.Day <= 20) { element = "Water"; return "Pisces"; }
    else { element = "Fire"; return "Aries"; }
    case 4: if (date.Day <= 20) { element = "Fire"; return "Aries"; }
    else { element = "Earth"; return "Taurus"; }
    case 5: if (date.Day <= 21) { element = "Earth"; return "Taurus"; }
    else { element = "Air"; return "Gemini"; }
    case 6: if (date.Day <= 22) { element = "Air"; return "Gemini"; }
    else { element = "Water"; return "Cancer"; }
    case 7: if (date.Day <= 22) { element = "Water"; return "Cancer"; }
    else { element = "Fire"; return "Leo"; }
    case 8: if (date.Day <= 23) { element = "Fire"; return "Leo"; }
    else { element = "Earth"; return "Virgo"; }
    case 9: if (date.Day <= 23) { element = "Earth"; return "Virgo"; }
    else { element = "Air"; return "Libra"; }
    case 10: if (date.Day <= 23) { element = "Air"; return "Libra"; }
    else { element = "Water"; return "Scorpio"; }
    case 11: if (date.Day <= 22) { element = "Water"; return "Scorpio"; }
    else { element = "Fire"; return "Sagittarius"; }
    case 12: if (date.Day <= 21) { element = "Fire"; return "Sagittarius"; }
    else { element = "Earth"; return "Capricorn"; }
    default:
        element = ""; return "";
}
        }