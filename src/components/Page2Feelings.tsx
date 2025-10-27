import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Page2FeelingsProps {
  onNext: () => void;
}

const Page2Feelings = ({ onNext }: Page2FeelingsProps) => {
  const messages = [
    "Every look...",
    "Every small talk...",
    "Every moment...",
    "Time paused when I saw you",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen gradient-soft-white flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Floating message bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-secondary flex items-center gap-2">
              <MessageCircle size={16} />
              <span className="font-light">{msg}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <span className="text-6xl">💭</span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-script font-bold text-secondary mb-8">
          My Feelings
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-light"
          >
            From that day, everything felt different.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-light"
          >
            Every look, every small talk, every moment — like time paused when
            I saw you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="font-light"
          >
            We chatted, laughed, and shared random things.
            <br />
            Even silence felt special.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="font-light italic text-muted-foreground"
          >
            But somehow, life paused too — small misunderstandings made me quiet.
            <br />
            Still… I never forgot how your smile could fix my worst days.
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          className="mt-10"
        >
          <Button
            onClick={onNext}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-heart transition-bounce"
          >
            Next 💌
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page2Feelings;
