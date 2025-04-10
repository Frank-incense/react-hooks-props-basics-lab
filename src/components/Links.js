import React from "react";

function Links(links){
    return (
        <div className="links">
            <h3>Links</h3>
            <a href={links.linkedin}>{links.linkedin}</a>
            <a href={links.github}>{links.github}</a>
        </div>
    )
}

export default Links