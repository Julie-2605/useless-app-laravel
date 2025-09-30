import { useState, useEffect, useCallback } from "react";
import { ShuffledCard } from "@/types/index";

export const useShuffledCards = () => {
    const [shuffledCards, setShuffledCards] = useState<ShuffledCard[]>([]);
    const [original, setOriginal] = useState<ShuffledCard[]>([]);
    const [loading, setLoading] = useState(true);

    const getShuffledCards = async () => {
        const response = await fetch('/api/shuffled-cards');
        const data: ShuffledCard[] = await response.json();

        setShuffledCards(data);
        setOriginal(data);
        setLoading(false);
    };

    const resetOrder = useCallback(() => {
        setShuffledCards(original);
    }, [original]);

    // const checkCorrectOrder = (cards: ShuffledCard[]) => {
    //     const numbers = cards.map(card => Number(card.number));
    //     const sorted = [...numbers].sort((a,b) => a - b);

    //     return numbers.every((number, index) => number === sorted[index]);
    // }

    const checkCorrectOrder = useCallback((list = shuffledCards) => {
        if (list.length === 0) return false;

        const numbers = list.map(card => Number(card.number));
        const sorted = [...numbers].sort((a, b) => a - b);

        return numbers.every((number, index) => number === sorted[index]);
    }, [shuffledCards]);

    useEffect(() => {
        getShuffledCards();
    }, []);

    return { shuffledCards, setShuffledCards, loading, resetOrder, checkCorrectOrder };
}