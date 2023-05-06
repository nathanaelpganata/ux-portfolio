import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
    children: React.ReactNode;
    title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <Navbar />
            <title>{title}</title>
            <div className="mt-40">{children}</div>
            <footer>
                <p className="mx-auto pt-24 pb-12 font-thin text-sm lg:text-lg w-10/12">
                    &copy; {currentYear} All Rights Reserved to Nathanael P
                    Ganata.
                </p>
            </footer>
        </div>
    );
};

export default Layout;
