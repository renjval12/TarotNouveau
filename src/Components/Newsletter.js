import React from "react";

export default function Newsletter() {
    return (
        <section id="newsletter-list" className="link-list">
            <h1>Subscribe to Newsletter</h1>
            <form>
                <div class="subscribe-input">
                    <label class="subscribe-label" htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div class="subscribe-input">
                    <label class="subscribe-label" htmlFor="email">Email Address: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <button>Subscribe</button>
            </form>
        </section>
    )
}