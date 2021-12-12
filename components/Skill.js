import React from "react";
import Image from "next/image";

export default function Skill({ references, active }) {
    return (
        <div className="skill" ref={references.skillRef}>
            <div className="skill-wrap">
                <div
                    className="skill-content"
                    style={
                        active == references.skillRef
                            ? { opacity: 1 }
                            : { opacity: 0, transform: "rotateY(180deg)" }
                    }
                >
                    <div>
                        <Image src="/svg/react.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/node.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/git.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/firebase.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/mongo.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/mysql.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/sass.svg" layout="fill" />
                    </div>
                    <div>
                        <Image src="/svg/github.svg" layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    );
}
