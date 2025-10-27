import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Page3ConfessionProps {
  onYes: () => void;
}

const Page3Confession = ({ onYes }: Page3ConfessionProps) => {
  const [showMaybeLater, setShowMaybeLater] = useState(false);

  const handleMaybeLater = () => {
    setShowMaybeLater(true);
  };

  if (showMaybeLater) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen gradient-peach-rose flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <span className="text-6xl mb-6 inline-block">💫</span>
          <p className="text-2xl md:text-3xl font-script text-foreground/80 leading-relaxed">
            That's okay… some feelings are meant to stay beautiful and unspoken 💫
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen gradient-peach-rose flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Floating hearts with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              className="text-primary/40"
              size={30 + Math.random() * 20}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block mb-8"
        >
          <Heart
            className="text-primary shadow-glow"
            size={80}
            fill="currentColor"
          />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-script font-bold text-primary mb-8">
          The Truth
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-light"
          >
            I don't know if destiny believes in us…
            <br />
            But I do.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-semibold text-2xl text-primary"
          >
            So here it is — simple and honest:
            <br />
            I like you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="font-light italic"
          >
            Not because you're perfect, but because you made my world softer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="font-light"
          >
            If your heart feels the same, just say <em>yes</em> — or tap the
            heart below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onYes}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-10 py-6 rounded-full shadow-heart transition-bounce animate-pulse-heart"
          >
            💗 Yes
          </Button>
          <Button
            onClick={handleMaybeLater}
            size="lg"
            variant="outline"
            className="border-2 border-muted-foreground/30 text-muted-foreground hover:bg-muted font-medium text-lg px-10 py-6 rounded-full transition-smooth"
          >
            💭 Maybe later
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page3Confession;
