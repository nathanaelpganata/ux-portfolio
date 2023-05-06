import { useRouter } from "next/router";
import React from "react";
import Layout from "@/layouts/Layout";
import ProjectData from "@/constant/Project";
import Image from "next/image";

const Projects = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout title={`Project ${id}`}>
            <div className="flex flex-col justify-center w-10/12 mx-auto">
                {ProjectData.filter((v) => v.id === id).map((v, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="absolute top-36 w-10/12 -z-10 px-8 pt-4 sm:pt-6 ">
                            <Image
                                src={v.hifiPrototype}
                                alt={v.title}
                                width={2000}
                                height={700}
                            />
                        </div>
                        <div className="bg-black/80 absolute top-36 w-10/12 h-72 -z-20 rounded-t-3xl"></div>
                        <div className="bg-white hover:bg-gray-100 rounded-b-3xl transition-all duration-150 ease-in-out mt-[1.4rem] sm:mt-20 md:mt-28 lg:mt-40  xl:mt-52 pb-6">
                            <div className="w-10/12 sm:w-9/12 py-6 space-y-6 mx-auto">
                                <div className="flex flex-col">
                                    <h1 className="text-4xl font-bold">
                                        {v.title}
                                    </h1>
                                    <h2 className="text-xl font-medium mt-2">
                                        {v.description}
                                    </h2>
                                    <p className="text-lg font-thin">
                                        {v.designerRole}
                                    </p>
                                </div>
                                <hr />
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Summary
                                    </h1>
                                    <p className="italic tracking-wider mt-2">
                                        {v.projectSummary}
                                    </p>
                                </div>{" "}
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Project Details
                                    </h1>
                                    <div className="mt-2 leading-relaxed">
                                        <li className="">
                                            <span className="font-medium">
                                                Project Goal:{" "}
                                            </span>
                                            {v.projectGoal}
                                        </li>
                                        <li className="">
                                            <span className="font-medium">
                                                Project Duration:{" "}
                                            </span>
                                            {v.projectDuration}
                                        </li>
                                        <li className="">
                                            <span className="font-medium">
                                                Project Tools:{" "}
                                            </span>
                                            {v.projectTools}
                                        </li>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Target Audience
                                    </h1>
                                    <p className="mt-2 tracking-wide">
                                        {v.targetAudience}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Challenges
                                    </h1>
                                    <p className="mt-2 tracking-wide">
                                        {v.challenges}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Lo-fi Prototype
                                    </h1>
                                    <Image
                                        src={v.lofiPrototype}
                                        alt={v.title}
                                        width={2000}
                                        height={700}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="text-2xl font-bold">
                                    <h1>Hi-fi Prototype</h1>
                                    <Image
                                        src={v.hifiPrototype}
                                        alt={v.title}
                                        width={2000}
                                        height={700}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold mb-3">
                                        Slide Deck (.pdf)
                                    </h1>
                                    <a
                                        href={v.slideDeckFile}
                                        className="bg-yellow-400 font-bold hover:bg-yellow-600 cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-xl"
                                        download
                                    >
                                        Download
                                    </a>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Conclusion
                                    </h1>
                                    <p className="mt-2 tracking-wider italic">
                                        {v.conclusion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Projects;
