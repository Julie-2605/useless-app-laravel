import React from "react";
import DragDropList from "@/components/drag-drop-list";
import { useDragDrop } from "@/hooks/use-drag-drop";

export default function DragDropPage() {
    const { things, setThings, shuffleThings, updateOrder } = useDragDrop();

    return (
        <main className="flex flex-col items-center p-6 sm:p-12 min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Drag & Drop</h1>

            <section className="w-full max-w-md sm:max-w-lg">
                <DragDropList things={things} setThings={setThings} updateOrder={updateOrder} />
                <button className="mt-6 w-full px-4 py-3 bg-purple-500 hover:bg-purple-700 text-white cursor-pointer font-semibold rounded-lg shadow-md transition-colors durantion-200" onClick={shuffleThings}>Shuffle</button>
            </section>
        </main>
    );
}