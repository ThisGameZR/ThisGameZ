import React from "react";

export default function Project({ references, active }) {
    return (
        <div className="project snap" ref={references.projectRef}>
            <div></div>
        </div>
    );
}
