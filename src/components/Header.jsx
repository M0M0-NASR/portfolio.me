import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      layout
      className="sticky top-0 z-50 mt-4"
      initial={false}
      animate={{
        paddingTop: isScrolled ? 8 : 0,
        paddingBottom: isScrolled ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        layout
        className={"mx-auto max-w-6xl px-4" + (isScrolled ? "" : "")}
      >
        <motion.nav
          layout
          className={
            "flex items-center justify-between backdrop-blur supports-[backdrop-filter]:bg-zinc-950/40 border border-zinc-800/80 transition-all rounded-2xl " +
            (isScrolled
              ? "px-4 py-2 shadow-lg shadow-black/20 bg-zinc-950/50"
              : "px-4 py-3")
          }
        >
          <a
            href="#hero"
            className="font-semibold tracking-tight text-zinc-100"
          >
            Mona SR
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
}

export default Header;
