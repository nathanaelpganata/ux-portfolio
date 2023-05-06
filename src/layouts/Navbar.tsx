import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
    const [colorChange, setColorChange] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setColorChange(true);
            } else {
                setColorChange(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <nav className="fixed top-0 pt-4 w-full">
            <div
                className={`flex flex-row gap-2 justify-between items-center mx-auto w-11/12 sm:w-11/12 px-8 md:py-2 rounded-3xl transition-all ease-in-out duration-200 ${
                    colorChange && "bg-black/90 text-white border-white"
                }`}
            >
                <div className="flex items-center space-x-4 py-2">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width={60}
                            height={60}
                            className="bg-white rounded-full w-[50px] sm:w-[60px]"
                        />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="hidden sm:flex sm:text-md md:text-xl font-semibold">
                            Nathanael P Ganata
                        </h1>
                        <h2 className="hidden sm:flex sm:text-sm md:text-lg font-light">
                            A User Experience Designer
                        </h2>
                    </div>
                </div>
                <div
                    className={`space-x-6 font-bold text-base md:text-xl ${
                        colorChange && "text-white"
                    }`}
                >
                    <Link
                        href="/"
                        className={`${
                            router.pathname == "/" ||
                            router.pathname.includes("/projects")
                                ? "underline "
                                : "text-gray-400 hover:underline"
                        } transition-all duration-200 underline-offset-4`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className={`
                            ${
                                router.pathname === "/about"
                                    ? "underline "
                                    : "text-gray-400 hover:underline"
                            } transition-all duration-200 underline-offset-4`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
