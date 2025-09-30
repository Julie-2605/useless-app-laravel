import React, { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { ShuffledCard } from "@/types/index";
import SortableCard from "./sortable-card";
import AnimationCelebration from "./animation-celebration";

interface Props {
    shuffledCards: ShuffledCard[];
    setShuffledCards: (shuffledCards: ShuffledCard[]) => void;
    checkCorrectOrder: (list?: ShuffledCard[]) => boolean;
}

export default function DragDropShuffledCards({ shuffledCards, setShuffledCards, checkCorrectOrder }: Props) {
    const [successCards, setSuccessCards] = useState(false);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = shuffledCards.findIndex((card) => card.id === active.id);
            const newIndex = shuffledCards.findIndex((card) => card.id === over.id);
            const newCards = arrayMove(shuffledCards, oldIndex, newIndex);

            setShuffledCards(newCards);

            if (checkCorrectOrder(newCards)) {
                setSuccessCards(true);

                setTimeout(() => setSuccessCards(false), 3600);
            }
        }
    };

    return (
        <section className="relative">
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={shuffledCards.map((card) => card.id)} strategy={rectSortingStrategy}>
                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                        {shuffledCards.map((card) => (
                            <SortableCard key={card.id} id={card.id} card={card} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            <AnimationCelebration trigger={successCards} />
        </section>
    );
}