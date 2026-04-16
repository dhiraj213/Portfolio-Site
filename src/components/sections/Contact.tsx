import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-[100vh] flex flex-col justify-center items-center py-20 z-10 px-4 pb-20 overflow-hidden">
      <ScrollReveal direction="up">
        <div className="p-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">Let's Connect</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto text-center">
            Reach out using the contact details below.
          </p>

          <div className="w-full max-w-2xl text-left">
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan text-center">Contact Details</h3>
            <div className="flex flex-col gap-6 items-center">
              <a href="mailto:ahiredhiraj213@gmail.com" className="flex items-center justify-center gap-4 text-gray-300 hover:text-neon-pink transition-colors">
                  <Mail size={24} /> ahiredhiraj213@gmail.com
                </a>
                <a href="tel:+917620571410" className="flex items-center gap-4 text-gray-300 hover:text-neon-pink transition-colors">
                  <Phone size={24} /> +91 7620571410
                </a>
                <a href="https://www.linkedin.com/in/dhiraj-ahire-829253341?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-pink transition-colors">
                  <FaLinkedin size={24} /> LinkedIn Profile
                </a>
                <a href="https://github.com/dhiraj213" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-pink transition-colors">
                  <FaGithub size={24} /> GitHub Profile
                </a>
              </div>
            </div>
          </div>
      </ScrollReveal>
    </section>
  );
}
