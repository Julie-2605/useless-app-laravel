import React, { useEffect, useState } from "react";
import DragDropList from "@/components/drag-drop-list";

export interface Thing {
    id: number;
    name: string;
    color: string;
    position: number;
}

export default function DragDropPage() {
    const [things, setThings] = useState<Thing[]>([]);

    useEffect(() => {
        fetch("/api/things")
        .then((res) => res.json())
        .then((data: Thing[]) => setThings(data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Drag & Drop</h1>

            <DragDropList things={things} setThings={setThings} />

            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg" onClick={() => {
                fetch("/api/things/shuffle", { method: "POST" })
                .then((res) => res.json())
                .then((data: Thing[]) => setThings(data));
            }}>Shuffle</button>
        </div>
    );
}