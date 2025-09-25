import React from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {

    return (
        <nav className="flex flex-col items-end p-4 lg:justify-center lg:p-8">
            <ThemeToggle />
        </nav>
    );
};