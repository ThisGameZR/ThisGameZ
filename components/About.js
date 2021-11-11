import React from "react";
import Image from "next/image";
import { useRef } from "react";

export default function About({ references }) {
    return (
        <div className="container-full about" ref={references.aboutRef}>
            <div className="about-content">
                <div className="about-content-top">
                    <div className="about-content-top-left">
                        <div className="about-content-top-left-image">
                            <Image
                                src="/img/profile.jpg"
                                layout="fill"
                                quality="100"
                            ></Image>
                        </div>
                    </div>
                    <div className="about-content-top-right">
                        <div className="about-content-top-right-title">
                            <h1>Hello! My name is Sahatham.</h1>
                            <h2>
                                I&apos;m currently studying at Chiang Mai
                                University
                                <br />
                                I&apos;m a full-stack web developer based in
                                Thailand
                            </h2>
                        </div>
                        <div className="about-content-top-right-text">
                            <p>
                                I majored in Computer Engineering, I expertise
                                in Web-development.
                                <br /> I&apos;ve always been someone who eager
                                to learn new things.
                                <br /> When I discovered web development in
                                college, I&apos;ve been fascinated by it.
                                <br /> So I decided to deepen my knowledge in
                                web development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-content-bottom"></div>
            </div>
        </div>
    );
}
