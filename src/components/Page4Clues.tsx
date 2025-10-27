import { motion } from "framer-motion";
import { Coffee, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Page4Clues = () => {
  const [revealedClues, setRevealedClues] = useState<number>(0);
  const [clueTimestamps, setClueTimestamps] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [canReveal, setCanReveal] = useState<boolean>(true);

  // Load timestamps from localStorage on mount
  useEffect(() => {
    const savedTimestamps = localStorage.getItem("clueTimestamps");
    if (savedTimestamps) {
      const timestamps = JSON.parse(savedTimestamps);
      setClueTimestamps(timestamps);
      setRevealedClues(timestamps.length);
    }
  }, []);

  // Check if 24 hours have passed since last reveal
  useEffect(() => {
    const checkTimeRemaining = () => {
      if (clueTimestamps.length === 0) {
        setCanReveal(true);
        setTimeRemaining("");
        return;
      }

      const lastTimestamp = clueTimestamps[clueTimestamps.length - 1];
      const now = Date.now();
      const hoursInMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      const timeSinceLastReveal = now - lastTimestamp;

      if (timeSinceLastReveal >= hoursInMs) {
        setCanReveal(true);
        setTimeRemaining("");
      } else {
        setCanReveal(false);
        const remaining = hoursInMs - timeSinceLastReveal;
        const hours = Math.floor(remaining / (60 * 60 * 1000));
        const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
        setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    checkTimeRemaining();
    const interval = setInterval(checkTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [clueTimestamps]);

  const clues = [
    {
      icon: "📅",
      text: "The first day you met me — 8th November 2022",
    },
    {
      icon: "🪑",
      text: "The 2nd bench — where everything started",
    },
    {
      icon: "💬",
      text: "Our long chats — late nights, small laughs",
    },
    {
      icon: "✉️",
      text: "A message after 1½ years — still the same name",
    },
    {
      icon: "☕",
      text: "Coffee ☕ — the place I'll be waiting if you find me",
    },
  ];

  const revealNextClue = () => {
    if (revealedClues < clues.length && canReveal) {
      const newTimestamps = [...clueTimestamps, Date.now()];
      setClueTimestamps(newTimestamps);
      setRevealedClues(revealedClues + 1);
      localStorage.setItem("clueTimestamps", JSON.stringify(newTimestamps));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen gradient-night-sky flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Twinkling stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Heart constellation */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
      >
        <Sparkles className="text-primary" size={100} />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-soft relative z-10 border border-white/20"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <span className="text-6xl">🌙</span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-script font-bold text-white mb-6">
          Find Me
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-4"
        >
          Okay… since you said yes 😌
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10"
        >
          Let's make it special.
          <br />
          You have 5 clues to know who I am — find them all, and you'll find me.
        </motion.p>

        <div className="space-y-4 mb-10">
          {clues.map((clue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: index < revealedClues ? 1 : 0,
                x: index < revealedClues ? 0 : -20,
              }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className={`bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 ${
                index < revealedClues ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{clue.icon}</span>
                <p className="text-left text-white font-light text-lg flex-1">
                  {clue.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {revealedClues < clues.length ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="space-y-4"
          >
            <Button
              onClick={revealNextClue}
              size="lg"
              disabled={!canReveal}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-10 py-6 rounded-full shadow-heart transition-bounce disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reveal Clue {revealedClues + 1} ✨
            </Button>
            {!canReveal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <Clock className="text-accent mx-auto mb-2" size={30} />
                <p className="text-white/90 text-sm font-light">
                  Next clue available in:
                </p>
                <p className="text-accent text-xl font-semibold mt-1">
                  {timeRemaining}
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-accent/30"
          >
            <Coffee className="text-accent mx-auto mb-4 animate-float" size={60} />
            <p className="text-2xl md:text-3xl font-script text-white leading-relaxed">
              If you find me, coffee is on me ☕💛
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-white/60 text-sm font-light">
          A story that began on Nov 8, 2022 🌙
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Page4Clues;
