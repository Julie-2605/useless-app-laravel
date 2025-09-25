import { useAppearance, Appearance } from "@/hooks/use-appearance";

export default function ThemeToggle() {
    const { appearance, updateAppearance } = useAppearance();

    const cycleAppearance = () => {
        const next: Record<Appearance, Appearance> = {
            light: "dark",
            dark: "system",
            system: "light",
        };

        updateAppearance(next[appearance]);
    };

    return (
        <button onClick={cycleAppearance} className="px-4 py-2 rounded-lg bg-slate-500  text-white dark:bg-slate-950 dark:text-gray-200 transition cursor-pointer">
            {appearance === "light" && "🌙 Dark"}
            {appearance === "dark" && "☀️ Light"}
            {appearance === "system" && "💻 Système"}
        </button>
    )
}