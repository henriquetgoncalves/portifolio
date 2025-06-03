import { motion } from 'framer-motion';

export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border rounded p-4 shadow"
    >
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm mb-2">{desc}</p>
      <p className="text-xs mb-2">{tech.join(', ')}</p>
      <a href={link} className="text-blue-500 underline" target="_blank" rel="noreferrer">GitHub</a>
    </motion.div>
  );
}
