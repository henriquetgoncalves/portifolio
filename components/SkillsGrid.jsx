const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  Frameworks: ['React', 'Next.js', 'Flask'],
  DevOps: ['Docker', 'Redis', 'GitHub', 'GitHub Actions'],
  Blockchain: ['Solidity', 'Web3.js', 'Hardhat', 'Uniswap', 'Orca'],
  Testing: ['Jest', 'pytest', 'Cypress'],
  Other: ['Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL', 'Serverless'],
};

export default function SkillsGrid() {
  return (
    <section className="py-10" id="skills">
      <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="border p-4 rounded">
            <h4 className="font-bold mb-2">{category}</h4>
            <ul className="space-y-1">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
