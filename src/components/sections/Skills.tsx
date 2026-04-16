import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "Java", "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "SQL", "PL/SQL", "REST APIs"]
    },
    {
      title: "AI & ML",
      skills: ["ML", "DL", "LLMs", "NLP", "AI Agents", "LangChain", "RAG"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "Firebase"]
    },
    {
      title: "Deployment & Tools",
      skills: ["Vercel", "Netlify", "Render", "AWS", "Git", "GitHub", "Cursor", "Antigravity", "GPT", "Claude Code", "Gemini", "Codex"]
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-[120vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="right">
        <div className="max-w-5xl w-full ml-auto text-right">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-right">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="glass-panel p-6 text-left">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-4 py-2 text-sm font-medium border border-neon-cyan/20 rounded-md bg-neon-purple/10 hover:bg-neon-cyan/20 hover:text-neon-cyan text-gray-200 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
