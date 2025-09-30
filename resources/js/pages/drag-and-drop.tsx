import React from "react";
import DragDropList from "@/components/drag-drop-list";
import DragDropShuffledCards from "@/components/drag-drop-shuffled-cards";
import { useDragDrop } from "@/hooks/use-drag-drop";
import { useShuffledCards } from "@/hooks/use-shuffled-cards";
import Navbar from "@/components/navbar";

export default function DragDropPage() {
    const { things, setThings, shuffleThings, updateOrder } = useDragDrop();
    const { shuffledCards, setShuffledCards, resetOrder, checkCorrectOrder } = useShuffledCards();

    return (
        <>
            <Navbar />
            
            <main className="flex flex-col items-center p-6 md:py-12 md:px-100 min-h-screen">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Drag & Drop</h1>

                <section className="w-full max-w-md sm:max-w-lg">
                    <h2 className="text-center text-2xl font-bold mb-3">Top Random</h2>
                    <DragDropList things={things} setThings={setThings} updateOrder={updateOrder} />
                    <button className="mt-6 w-full px-4 py-3 bg-purple-500 hover:bg-purple-700 text-white cursor-pointer font-semibold rounded-lg shadow-md transition-colors duration-200" onClick={shuffleThings}>Shuffle</button>
                </section>

                <section className="flex flex-col items-start justify-start w-full mt-10">
                    <h2 className="text-2xl font-bold mb-3">Card to Order</h2>
                    <div className="flex flex-col justify-center items-center w-full">
                        <DragDropShuffledCards shuffledCards={shuffledCards} setShuffledCards={setShuffledCards} checkCorrectOrder={checkCorrectOrder} />
                        <button className="mt-6 w-60 px-4 py-3 bg-purple-500 hover:bg-purple-700 text-white cursor-pointer font-semibold rounded-lg shadow-md transition-cikirs duration-200" onClick={resetOrder}>Reset</button>
                    </div>
                </section>

                <section className="flex flex-col justify-center w-full mt-50">
                    <h2 className="text-2xl text-center font-bold mb-3">Tableau Kanban</h2>
                </section>
            </main>
        </>
    );
}