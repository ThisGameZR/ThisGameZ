import Home from "../components/Home";
import About from "../components/About";
import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Index() {
    const references = {
        homeRef: useRef(null),
        aboutRef: useRef(null),
        projectRef: useRef(null),
        contactRef: useRef(null),
    };

    const [active, setActive] = useState(references.homeRef);
    const [navDisplay, setNavDisplay] = useState(false);

    const handleScroll = (e) => {
        if (window.pageYOffset < references.aboutRef.current.offsetTop) {
            setActive(references.homeRef);
            setNavDisplay(false);
        }
        if (window.pageYOffset >= references.aboutRef.current.offsetTop) {
            setActive(references.aboutRef);
            setNavDisplay(true);
        }
        if (window.pageYOffset >= references.projectRef.offsetTop) {
            setActive(references.projectRef);
            setNavDisplay(true);
        }
        if (window.pageYOffset >= references.contactRef.offsetTop) {
            setActive(references.contactRef);
            setNavDisplay(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Toaster />
            <Nav
                references={references}
                active={active}
                navDisplay={navDisplay}
            ></Nav>
            <Home references={references}></Home>
            <About references={references}></About>
        </div>
    );
}
