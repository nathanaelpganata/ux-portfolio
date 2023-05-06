import Link from "next/link";
import React from "react";

type ProjectCardsProps = {
    id: string;
    title: string;
    description: string;
    image: string;
};

const ProjectCards = ({ id, title, description, image }: ProjectCardsProps) => {
    return (
        <Link
            href={`/projects/${id}`}
            className={`flex flex-col group justify-center items-center w-full max-w-[40rem] h-60 bg-cover bg-center rounded-2xl`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="flex flex-col items-center justify-center w-full h-full group-hover:bg-black/70 rounded-2xl transition-all duration-200 ease-in-out text-center">
                <h1 className="flex text-transparent text-4xl font-bold group-hover:text-white px-6 transition-all duration-500 ease-in-out">
                    {title}
                </h1>
                <h2 className="flex text-transparent text-xl font-thin group-hover:text-white px-6 transition-all duration-500 ease-in-out">
                    {description}
                </h2>
            </div>
        </Link>
    );
};

export default ProjectCards;
