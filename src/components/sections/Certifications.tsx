import { Award } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Certifications() {
  const certs = [
    "AWS Academy Cloud Foundations",
    "AR/VR Bootcamp (C-DAC)",
  ];

  return (
    <section id="certifications" className="relative w-full min-h-[100vh] flex flex-col justify-center py-20 z-10 px-4 md:px-24 overflow-hidden">
      <ScrollReveal direction="left">
        <div className="max-w-5xl w-full mr-auto text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-left">Certifications</h2>
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {certs.map((cert, i) => (
              <div key={i} className="glass-panel p-6 flex items-center gap-4 hover:bg-neon-cyan/10 transition-colors justify-start">
                <Award className="text-neon-cyan flex-shrink-0" size={32} />
                <span className="text-lg font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
