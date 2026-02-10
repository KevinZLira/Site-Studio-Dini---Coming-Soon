import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/studio-dini-logo.svg";
import icon from "@/assets/studio-dini-icon.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/studiodini_/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/5511934859024", label: "WhatsApp" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/studio-dini/", label: "LinkedIn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-12 selection:bg-primary selection:text-primary-foreground">
      <div className="flex w-full max-w-xl flex-col items-center text-center gap-12">
        {/* Logos */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={icon} alt="" className="h-16 w-auto sm:h-20 md:h-24" />
          <img src={logo} alt="Studio Dini" className="h-16 w-auto sm:h-20 md:h-28" />
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.35em] uppercase text-primary"
          >
            Coming Soon
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            className="text-3xl leading-snug font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-snug"
          >
            Toda marca começa
            <br />
            de um sonho.
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            Nosso novo site está em construção. Em breve.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="h-px w-12 bg-primary/40"
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
