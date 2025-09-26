import { useState, useEffect } from "react";
import { ShuffledCard } from "@/types/index";

export const useShuffledCards = () => {
    const [shuffledCards, setShuffledCards] = useState<ShuffledCard[]>([]);

    const getShuffledCards = async () => {
        const response = await fetch('/api/shuffled-cards');
        const data: ShuffledCard[] = await response.json();

        setShuffledCards(data);
    };

    useEffect(() => {
        getShuffledCards();
    }, []);

    return { shuffledCards, setShuffledCards };
}