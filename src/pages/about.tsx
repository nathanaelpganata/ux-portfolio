import React from "react";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const about = () => {
    return (
        <Layout title="UX Portfolio | About">
            <div className="flex flex-col w-10/12 mx-auto items-center gap-4">
                <div className="flex w-10/12 sm:w-2/3 xl:w-1/2">
                    <Image
                        src={"/images/profile.png"}
                        alt="about"
                        width={360}
                        height={380}
                        className="w-44 rounded-2xl object-cover"
                    />
                </div>
                <div className="w-10/12 sm:w-2/3 xl:w-1/2 flex flex-col space-y-8  tracking-wide">
                    <h1 className="text-4xl font-bold">Hi, I&apos;m Nathan</h1>
                    <h2 className="text-xl">
                        Welcome to my UX designer portfolio!
                    </h2>
                    <p className="text-lg tracking-wide leading-relaxed font-thin italic h-full border-l-[1px] pl-4 border-gray-500">
                        As a UX designer, I strongly believe in putting the user
                        at the center of the design process. By prioritizing the
                        needs and desires of the user, I aim to create digital
                        experiences that are intuitive, efficient, and
                        enjoyable. I am passionate about understanding the human
                        experience and using this knowledge to create meaningful
                        connections through design. So let&apos;s work together
                        to create experiences that put the user first and
                        deliver exceptional results.
                    </p>
                    <h2 className="text-lg">
                        Also Checkout my front-end developer portfolio: <br />{" "}
                        <Link
                            href="https://profile.nathanpg.vercel.app"
                            target="blank"
                            className="underline tracking-tight font-semibold"
                        >
                            Here
                        </Link>
                    </h2>
                    <div className="flex space-x-4">
                        <Link
                            href="mailto:nathanaelpg8@gmail.com"
                            target="blank"
                        >
                            <AiOutlineMail className="w-8 h-8 " />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/nathanaelpg/"
                            target="blank"
                        >
                            <AiFillLinkedin className="w-8 h-8 " />
                        </Link>
                        <Link
                            href="https://github.com/nathanaelpganata"
                            target="blank"
                        >
                            <AiFillGithub className="w-8 h-8 " />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default about;
