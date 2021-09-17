import React from "react";
export default function Contact() {
    return (
        <>
            <form id="contact-form" action="https://formsubmit.co/30d22697b7647ac28e0f3b35c0a7b555" method="POST">
                <h1 id="contact-us-heading" class="top-of-page-heading">Contact Us</h1>
                <p class="input-heading">Name:</p>
                <input type="text" placeholder="Required" name="Name" required />
                <p class="input-heading">Email Address:</p>
                <input type="text" placeholder="Required" name="Email Address" required />
                <p class="input-heading">Upload a File:</p>
                <input type="file" id="myFile" name="File Name" />
                <p class="input-heading">Type in your inquiry:</p>
                <textarea name="Inquiry Text" id="inquiry-text" cols="30" rows="10"
                    placeholder="Please type your inquiry here"></textarea>
                <button id="submit-contact-btn" type="submit">Send</button>
            </form>
        </>
    )

}