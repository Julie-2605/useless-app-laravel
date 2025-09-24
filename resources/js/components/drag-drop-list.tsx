import React from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./sortable-item";
import { Thing } from "../pages/drag-and-drop";

interface Props {
    things: Thing[];
    setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
}

export default function DragDropList({ things, setThings }: Props) {
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = things.findIndex((thing) => thing.id === active.id);
            const newIndex = things.findIndex((thing) => thing.id === over.id);

            const newThings = arrayMove(things, oldIndex, newIndex);
            setThings(newThings);

            //Sauvegarde en base
            fetch("/api/things/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ things: newThings.map((thing) => thing.id) }),
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={things.map((thing) => thing.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-2">
                    {things.map((thing) => (
                        <SortableItem key={thing.id} id={thing.id} thing={thing} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}