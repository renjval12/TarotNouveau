import React from "react";

export default function FooterLink(props) {
    return (
        <>
        <li id={props.id} className="link-list-item"><a href={props.href}>{props.linkName}</a></li>
        </>
    )
}