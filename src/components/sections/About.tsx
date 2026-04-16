import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-[120vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="left">
        <div className="max-w-4xl w-full mr-auto text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-left">About Me</h2>
          <div className="glass-panel p-8 md:p-12">
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I am a passionate AI & Data Science Engineer with a strong foundation in <strong>machine learning</strong>, <strong>data analysis</strong>, and
                <strong>software development</strong>.
              </p>
              <p>
                I enjoy transforming complex data into meaningful insights and building intelligent, scalable solutions that solve real-world problems. With hands-on experience in Python, SQL, and modern frameworks, I have developed end-to-end projects ranging from predictive models to AI-powered applications.
              </p>
              <p>
                I am particularly interested in multi-agent systems, automation, and deploying data-driven solutions that create real impact. Continuously learning and exploring emerging technologies, I am eager to contribute my skills to innovative teams and grow as a machine learning professional.
              </p>

            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-2 border border-neon-cyan/40 rounded-full bg-neon-cyan/5 text-neon-cyan">
                Vibe Coding
              </div>
              <div className="px-6 py-2 border border-neon-cyan/40 rounded-full bg-neon-cyan/5 text-neon-cyan">
                Problem Solving
              </div>
              <div className="px-6 py-2 border border-neon-cyan/40 rounded-full bg-neon-cyan/5 text-neon-cyan">
                Team Collaboration
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
