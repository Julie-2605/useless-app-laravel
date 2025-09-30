import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import celebrationAnimation from "@/assets/celebration-confetti.json";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimationCelebration({ trigger }: { trigger: boolean}) {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (trigger) {
            setShowAnimation(true);

            const timer = setTimeout(() => setShowAnimation(false), 3400);
            
            return () => {
                clearTimeout(timer);
            }
        }
    }, [trigger]);

    return (
        <AnimatePresence>
            {showAnimation && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <Lottie animationData={celebrationAnimation} loop={false} className="w-150 h-150" />

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="bg-white text-gray-950 px-6 py-3 rounded-xl shadow-lg text-lg font-semibold pointer-events-auto">
                        🎉 Bravo t'es un génie !
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}