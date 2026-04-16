import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  const projects = [
    {
      title: "Carbon Emission Credit System",
      desc: "An ML-powered web application that predicts transportation-based carbon emissions and rewards users with carbon credits to encourage sustainable travel.",
      tech: ["Python", "Flask", "Node.js", "SQLite", "MongoDB", "Scikit-learn"],
      role: "Full-Stack & ML Developer",
      github: "https://github.com/dhiraj213/Carbon-Emission-Credit-System",
      live: null
    },
    {
      title: "Financial Fraud Detection System",
      desc: "An AI-driven system that detects fraudulent financial transactions using anomaly detection techniques and generates risk summaries with LLM integration.",
      tech: ["Python", "FastAPI", "React", "Firebase", "Pandas", "Scikit-learn"],
      role: "Full-Stack & AI Developer",
      github: "https://github.com/dhiraj213/Financial-Risk-Fraud-Detection-Assistant",
      live: "https://example.com"
    },
    {
      title: "ChatPulse",
      desc: "A real-time messaging application offering a WhatsApp/Telegram-like experience with secure authentication, private chats, media sharing, and instant communication powered by Socket.IO.",
      tech: ["Node.js", "Express", "React", "Socket.IO", "PostgreSQL", "Prisma"],
      role: "Full-Stack Developer",
      github: "https://github.com/your-username/chatpulse",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-[150vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="up">
        <div className="max-w-6xl w-full mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="glass-panel p-8 hover:bg-neon-purple/10 transition-colors duration-300 group flex flex-col text-left">
                <h3 className="text-2xl font-bold mb-3 text-neon-cyan">{p.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{p.desc}</p>
                <div className="mb-4">
                  <strong className="text-white block mb-1">Role:</strong>
                  <span className="text-sm text-gray-400">{p.role}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, index) => (
                    <span 
                      key={index} 
                      aria-label={`Technology: ${t}`}
                      className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs rounded border border-neon-pink/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-white text-gray-400 transition-colors">
                    <FaGithub size={16} /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-white text-gray-400 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
