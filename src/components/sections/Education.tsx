import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Education() {
  const edu = [
    {
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: " SNJB’s COE,Chandwad (Maharashtra)",
      year: " Sept 2024 - Jun 2027 "
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Dhule (Maharashtra)",
      year: "July 2021 - Jun 2024"
    }
  ];

  return (
    <section id="education" className="relative w-full min-h-[120vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="right">
        <div className="max-w-5xl ml-auto w-full text-right flex flex-col items-end">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-right w-full">Education</h2>
          <div className="space-y-6 flex flex-col items-end w-full mt-8">
            {edu.map((e, i) => (
              <div key={i} className="glass-panel p-6 md:p-8 text-left w-full max-w-xl">
                <span className="text-neon-cyan font-mono text-sm mb-2 block">{e.year}</span>
                <h3 className="text-2xl font-bold text-white">{e.degree}</h3>
                <p className="text-lg text-neon-pink">{e.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
