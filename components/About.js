import React from "react";
import Image from "next/image";
import { useRef } from "react";

export default function About({ references }) {
    return (
        <div className="about" ref={references.aboutRef}>
            <div className="about-content">
                <div className="about-content-top">
                    <div className="about-content-top-left">
                        <div className="about-content-top-left-image">
                            <Image
                                src="/img/profile.jpg"
                                layout="fill"
                                quality="100"
                                objectFit="contain"
                            ></Image>
                        </div>
                    </div>
                    <div className="about-content-top-right">
                        <div className="about-content-top-right-content">
                            <h1>Hello! My name is Sahatham.</h1>
                            <h2>
                                I&apos;m currently studying at Chiang Mai
                                University.
                                <br /> I&apos;m a full-stack web developer based
                                in Thailand
                            </h2>
                            <p>
                                I majored in Computer Engineering, I expertise
                                in Web-development. I&apos;ve always been
                                someone who eager to learn new things. When I
                                discovered web development in college, I&apos;ve
                                been fascinated by it. So I decided to deepen my
                                knowledge in web development.
                            </p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div>facebook</div>
                        <div>email</div>
                        <div>phone</div>
                    </div>
                </div>
                <div className="about-content-bottom">
                    <div className="header">MY SKILLS</div>
                    <div className="content"></div>
                </div>
            </div>
        </div>
    );
}
