import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsGrid from '../components/SkillsGrid';
import CryptoWidget from '../components/CryptoWidget';
import FitnessChart from '../components/FitnessChart';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'YouTube Transcription API',
    desc: 'Flask API that ingests YouTube URLs and converts audio to text.',
    tech: ['Flask', 'Docker', 'Redis', 'Python'],
    link: 'https://github.com/henrique/youtube-transcription',
  },
  {
    title: 'Crypto Portfolio Tracker',
    desc: 'Dashboard to track trades and P/L over time.',
    tech: ['Python', 'Pandas', 'Plotly'],
    link: 'https://github.com/henrique/crypto-tracker',
  },
  {
    title: 'CrossFit Performance Dashboard',
    desc: 'Interactive dashboard to log WODs and PRs.',
    tech: ['React', 'Next.js', 'Chart.js'],
    link: 'https://github.com/henrique/crossfit-dashboard',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique Gonçalves</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <SkillsGrid />
      <section id="projects" className="py-10 grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </section>
      <CryptoWidget />
      <FitnessChart />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}
