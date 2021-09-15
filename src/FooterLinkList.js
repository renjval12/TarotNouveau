import React, { useState } from "react";

export default function LinkList(props) {
    const [links, setLinks] = useState([])

    setLinks(props.link)

    return (
        <div>
            <h1>{props.linkName}</h1>
            {links.map(link =>
                <>
                    <ul>
                        <li>{link}</li>
                    </ul>
                </>
            )
            }

        </div>
    )
}