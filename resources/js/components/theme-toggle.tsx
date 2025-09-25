import { useAppearance } from "@/hooks/use-appearance";

export default function ThemeToggle() {
    const { appearance, updateAppearance } = useAppearance();
    
    const toggleTheme = () => {
        updateAppearance(appearance === "dark" ? "light" : "dark");
    }

    return (
        <button onClick={toggleTheme} className="px-4 py-2 rounded-lg bg-slate-500  text-white dark:bg-slate-950 dark:text-gray-200 transition cursor-pointer">
            {appearance === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    )
}