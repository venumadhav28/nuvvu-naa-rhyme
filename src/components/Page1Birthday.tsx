import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Page1BirthdayProps {
  onNext: () => void;
}

const Page1Birthday = ({ onNext }: Page1BirthdayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen gradient-pink-lavender flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0,
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart
              className="text-primary/30"
              size={20 + Math.random() * 20}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-6"
        >
          <span className="text-6xl">💫</span>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-script font-bold text-primary mb-6">
          Happy Birthday
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p className="font-light">
            Wishing the most beautiful soul a day filled with endless smiles,
            laughter, and gentle peace.
          </p>

          <p className="font-light">
            This message isn't from someone random — it's from a heart that's
            been silently wishing you happiness since{" "}
            <span className="font-semibold text-primary">November 8, 2022</span>{" "}
            🌙
          </p>

          <p className="font-light italic">
            No name for now… just a wish from someone who never forgot those
            innocent eyes from the <span className="font-semibold">2nd bench</span>.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="mt-10"
        >
          <Button
            onClick={onNext}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-heart transition-bounce"
          >
            Next ❤️
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page1Birthday;
