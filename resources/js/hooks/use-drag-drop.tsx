import { useState, useEffect } from "react";
import { Thing } from "@/types/index";

export const useDragDrop = () => {
    const [things, setThings] = useState<Thing[]>([]);

    const getThings = async () => {
        const response = await fetch("/api/things");
        const data: Thing[] = await response.json();

        setThings(data);
    };

    const shuffleThings = async () => {
        const response = await fetch("/api/things/shuffle", { method: "POST" });
        const data: Thing[] = await response.json();

        setThings(data);
    };

    const updateOrder = async (newThings: Thing[]) => {
        setThings(newThings);

        await fetch("/api/things/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ things: newThings.map(thing => thing.id) }),
        });
    };

    useEffect(() => {
        getThings();
    }, []);

    return { things, setThings, shuffleThings, updateOrder };
}