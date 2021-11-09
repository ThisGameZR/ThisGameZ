import React from "react";
import Image from "next/image";
import { useRef } from "react";

export default function About({ references }) {
    return (
        <div className="container-full about" ref={references.aboutRef}>
            <div></div>
            <div className="about__box">
                <div className="about__box__header">
                    <span>ABOUT ME</span>
                </div>
                <div className="about__box__content">
                    <div className="about__box__content--left">
                        <div className="image">
                            <div></div>
                        </div>
                        <div className="description">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged
                        </div>
                    </div>
                    <div className="about__box__content--right">
                        <div className="header">SKILLS</div>
                        <div className="content">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
