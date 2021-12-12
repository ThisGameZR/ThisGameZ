import React from "react";
import Image from "next/image";

export default function Project({ references, active }) {
    return (
        <div className="project snap" ref={references.projectRef}>
            <div className="project-content">
                <ProjectCard
                    path={"/img/ecommerce.jpeg"}
                    name={"Ecommerce App"}
                    link={"https://github.com/ThisGameZR/Ecommerce_App"}
                />
                <ProjectCard
                    path={"/img/dailypoisson.png"}
                    name={"Daily Poisson"}
                    link={"https://github.com/amchicken/daily-poisson"}
                />
                <ProjectCard
                    path={"/img/thisgamez.png"}
                    name={"ThisGameZ"}
                    link={"https://github.com/ThisGameZR/ThisGameZ"}
                />
            </div>
        </div>
    );
}

const ProjectCard = ({ path, name, link }) => {
    console.log(path);
    return (
        <div className="card">
            <div className="card-content">
                <div
                    className="card-image"
                    onClick={() => {
                        window.open(link);
                    }}
                >
                    <Image
                        src={path}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={`center`}
                        quality={100}
                    />
                </div>
                <div
                    className="card-title"
                    onClick={() => {
                        window.open(link);
                    }}
                >
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};
