import React from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "@inertiajs/react";
import { dragAndDrop, home } from "@/routes";

export default function Navbar() {

    return (
        <nav className="flex flex-row gap-10 items-center p-4 justify-end lg:p-8">
            <Link href={home()} className="">🏠 Welcome</Link>
            <Link href={dragAndDrop()} className="">🎈 Drag & Drop</Link>
            <ThemeToggle />
        </nav>
    );
};