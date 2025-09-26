import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ShuffledCard } from "@/types/index";

interface Props {
    id: number;
    card: ShuffledCard;
}

export default function SortableCard({ id, card}: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <article ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-10 w-3xs h-60 bg-slate-700 text-white rounded-lg shadow-md cursor-grab select-none text-center">
            <h3 className="text-xl font-bold">{card.number}</h3>
            <p className="text-sm mt-1">{card.quote}</p>
        </article>
    );
}