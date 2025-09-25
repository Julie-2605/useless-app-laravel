import React from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./sortable-item";
import { Thing } from "@/types/index";

interface Props {
    things: Thing[];
    setThings: (things: Thing[]) => void;
    updateOrder: (things: Thing[]) => void;
}

export default function DragDropList({ things, setThings, updateOrder }: Props) {
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = things.findIndex((thing) => thing.id === active.id);
            const newIndex = things.findIndex((thing) => thing.id === over.id);
            const newThings = arrayMove(things, oldIndex, newIndex);

            setThings(newThings);
            updateOrder(newThings);
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={things.map((thing) => thing.id)} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-3">
                    {things.map((thing) => (
                        <SortableItem key={thing.id} id={thing.id} thing={thing} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}