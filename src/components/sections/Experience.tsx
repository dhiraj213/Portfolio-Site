import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  const exps = [
    {
      role: "Data Science/ML Intern",
      company: "ScaleFull Technologies",
      year: " Jan 2026 – Feb 2026 ",
      details: [
        "Collaborated with cross-functional teams to deploy AI solutions into production.",
        "Learned about data preprocessing, model development, evaluation and opmization techniques.",
        "Built end-to-end machine learning projects like Carbon Emission Credit System ,Heart disease prediction System and much more."
      ]
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-[120vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="left">
        <div className="max-w-5xl w-full mr-auto text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-left">Experience</h2>
          <div className="space-y-8 mt-8">
            {exps.map((exp, i) => (
              <div key={i} className="glass-panel p-6 md:p-8">
                <span className="text-neon-cyan font-mono text-sm mb-2 block">{exp.year}</span>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-lg text-neon-pink mb-4">{exp.company}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.details.map((d, index) => (
                    <li key={index}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
