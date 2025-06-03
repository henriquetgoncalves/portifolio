import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20" id="hero">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4"
      >
        Henrique Gonçalves
      </motion.h2>
      <p className="mb-2">Full-Stack Developer, Crypto Enthusiast, CrossFit Athlete</p>
      <p className="italic">Transforming ideas into code, one block at a time.</p>
    </section>
  );
}
