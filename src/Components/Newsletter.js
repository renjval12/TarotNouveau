import React from "react";

export default function Newsletter() {
    return (
        <div id="newsletter-list" className="link-list">
            <h1>Subscribe to Newsletter</h1>
            <form>
                <div className="subscribe-input">
                    <label className="subscribe-label white-text" htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="subscribe-input">
                    <label className="subscribe-label white-text" htmlFor="email">Email Address: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <button>Subscribe</button>
            </form>
        </div>
    )
}