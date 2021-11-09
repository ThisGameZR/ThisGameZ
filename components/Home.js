import React from "react";
import { useRef } from "react";

export default function Home({ references }) {
    const viewMore = () => {
        references.aboutRef.current.scrollIntoView();
    };

    return (
        <div className="container-full home" ref={references.homeRef}>
            <div className="section">
                <div className="title">Hello, I'm ThisGameZ</div>
                <div className="description">
                    I'm a full-stack web developer
                </div>
                <button onClick={() => viewMore()}>View More</button>
            </div>
        </div>
    );
}
