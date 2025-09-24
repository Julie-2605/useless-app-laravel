import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Thing } from "../pages/drag-and-drop";

interface Props {
    id: number;
    thing: Thing;
}

export default function SortableItem({ id, thing }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: thing.color,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 rounded-xl shadow-md cursor-grab text-white font-bold select-none">
            {thing.name}
        </div>
    )
}