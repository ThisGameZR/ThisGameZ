import React from "react";
import Image from "next/image";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function About({ references, active }) {
    return (
        <div className="about snap" ref={references.aboutRef}>
            <div className="about-content">
                <div className="about-content-top">
                    <div
                        className="about-content-top-left"
                        style={
                            active == references.aboutRef
                                ? { opacity: 1 }
                                : { opacity: 0, transform: "translateX(-100%)" }
                        }
                    >
                        <div className="about-content-top-left-image">
                            <Image
                                src="/img/profile.jpg"
                                layout="fill"
                                quality="100"
                                objectFit="cover"
                            ></Image>
                        </div>
                    </div>
                    <div
                        className="about-content-top-right"
                        style={
                            active == references.aboutRef
                                ? { opacity: 1 }
                                : { opacity: 0, transform: "translateX(100%)" }
                        }
                    >
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
                            <div className="contact-info">
                                <div
                                    onClick={() => {
                                        window.open(
                                            "https://www.facebook.com/profile.php?id=100009118786117"
                                        );
                                    }}
                                >
                                    <Image
                                        src="/svg/facebook.svg"
                                        layout="fill"
                                    ></Image>
                                </div>
                                <div
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            "thisgamezforwork@gmail.com"
                                        );
                                        toast("thisgamezforwork@gmail.com");
                                        toast("✅ Email copied to clipboard");
                                    }}
                                >
                                    <Image
                                        src="/svg/email.svg"
                                        layout="fill"
                                    ></Image>
                                </div>
                                <div
                                    onClick={() => {
                                        window.open(
                                            "https://github.com/ThisGameZR?tab=repositories"
                                        );
                                    }}
                                >
                                    <Image
                                        src="/svg/github.svg"
                                        layout="fill"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
