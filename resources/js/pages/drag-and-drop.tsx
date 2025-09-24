import React from "react";
import DragDropList from "@/components/drag-drop-list";
import { useDragDrop } from "@/hooks/use-drag-drop";

export default function DragDropPage() {
    const { things, setThings, shuffleThings, updateOrder } = useDragDrop();

    return (
        <main className="flex flex-col p-6 m-4">
            <h1 className="text-2xl font-bold mb-4">Drag & Drop</h1>

            <DragDropList things={things} setThings={setThings} updateOrder={updateOrder} />

            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg" onClick={shuffleThings}>Shuffle</button>
        </main>
    );
}