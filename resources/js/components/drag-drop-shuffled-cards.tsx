import React from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { ShuffledCard } from "@/types/index";
import SortableCard from "./sortable-card";

interface Props {
    shuffledCards: ShuffledCard[];
    setShuffledCards: (shuffledCards: ShuffledCard[]) => void;
}

export default function DragDropShuffledCards({ shuffledCards, setShuffledCards }: Props) {
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = shuffledCards.findIndex((card) => card.id === active.id);
            const newIndex = shuffledCards.findIndex((card) => card.id === over.id);
            const newCards = arrayMove(shuffledCards, oldIndex, newIndex);

            setShuffledCards(newCards);
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={shuffledCards.map((card) => card.id)} strategy={rectSortingStrategy}>
                <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                    {shuffledCards.map((card) => (
                        <SortableCard key={card.id} id={card.id} card={card} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}