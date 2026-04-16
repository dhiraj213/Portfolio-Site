"use client";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
   const [text, setText] = useState("");
   const fullText = "AI & Data Science Engineer";

   useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
         setText(fullText.slice(0, index));
         index++;
         if (index > fullText.length) {
            clearInterval(interval);
         }
      }, 100);
      return () => clearInterval(interval);
   }, []);

   return (
      <section id="hero" className="relative w-full min-h-[120vh] flex flex-col justify-center items-center text-center z-10 px-4">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-16 max-w-4xl mx-auto w-full"
         >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-neon-cyan to-neon-purple drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
               Dhiraj Ahire
            </h1>
            <h2 className="text-2xl md:text-3xl text-neon-pink font-medium mb-6 h-8">
               {text}<span className="animate-ping">|</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
               Transforming data into actionable insights and scalable AI solutions ..
            </p>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2, duration: 1 }}
               className="mt-12"
            >
               <span className="text-sm uppercase tracking-[0.3em] text-gray-500 animate-pulse">Scroll Down</span>
            </motion.div>
         </motion.div>
      </section>
   );
}
