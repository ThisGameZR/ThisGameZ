import React from "react";

export default function Nav({ references, active, navDisplay }) {
    const scrollTo = (ref) => {
        ref.current?.scrollIntoView();
    };

    return (
        <div
            className="navbar"
            style={
                navDisplay
                    ? { opacity: "1", top: "0" }
                    : { opacity: "0", top: "-50px" }
            }
        >
            <ul className="navbar__menu">
                <li
                    className={
                        active == references.homeRef
                            ? "navbar__menu--list active"
                            : "navbar__menu--list"
                    }
                    onClick={() => scrollTo(references.homeRef)}
                >
                    HOME
                </li>
                <li
                    className={
                        active == references.aboutRef
                            ? "navbar__menu--list active"
                            : "navbar__menu--list"
                    }
                    onClick={() => scrollTo(references.aboutRef)}
                >
                    ABOUT
                </li>
                <li
                    className={
                        active == references.projectRef
                            ? "navbar__menu--list active"
                            : "navbar__menu--list"
                    }
                    onClick={() => scrollTo(references.projectRef)}
                >
                    MY PROJECTS
                </li>
                <li
                    className={
                        active == references.contactRef
                            ? "navbar__menu--list active"
                            : "navbar__menu--list"
                    }
                    onClick={() => scrollTo(references.contactRef)}
                >
                    CONTACT
                </li>
            </ul>
        </div>
    );
}
