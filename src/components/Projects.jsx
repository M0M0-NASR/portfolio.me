import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  const projectSections = {
    web: {
      title: "Web Applications",
      projects: [
        {
          id: 1,
          title: "E-commerce Platform",
          description:
            "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
          image: "https://picsum.photos/400/200?random=11",
          type: "web",
          tech: ["React", "Node.js", "MongoDB", "Stripe"],
        },
        {
          id: 2,
          title: "Task Management App",
          description:
            "Collaborative task management tool with real-time updates.",
          image: "https://picsum.photos/400/200?random=12",
          type: "web",
          tech: ["React", "Firebase", "Tailwind CSS"],
        },
        {
          id: 3,
          title: "Weather Dashboard",
          description:
            "Beautiful weather app with location-based forecasts and charts.",
          image: "https://picsum.photos/400/200?random=13",
          type: "web",
          tech: ["React", "Chart.js", "OpenWeather API"],
        },
      ],
    },
    mobile: {
      title: "Mobile Applications",
      projects: [
        {
          id: 4,
          title: "Fitness Tracker",
          description:
            "Cross-platform mobile app for tracking workouts and nutrition.",
          image: "https://picsum.photos/400/200?random=14",
          type: "mobile",
          tech: ["React Native", "Firebase", "Redux"],
        },
        {
          id: 5,
          title: "Social Media App",
          description:
            "Photo sharing app with real-time messaging and stories.",
          image: "https://picsum.photos/400/200?random=15",
          type: "mobile",
          tech: ["React Native", "Socket.io", "AWS S3"],
        },
      ],
    },
    desktop: {
      title: "Desktop Applications",
      projects: [
        {
          id: 6,
          title: "Code Editor",
          description:
            "Modern code editor with syntax highlighting and extensions.",
          image: "https://picsum.photos/400/200?random=16",
          type: "desktop",
          tech: ["Electron", "React", "Monaco Editor"],
        },
        {
          id: 7,
          title: "File Manager",
          description: "Advanced file manager with cloud sync and encryption.",
          image: "https://picsum.photos/400/200?random=17",
          type: "desktop",
          tech: ["Electron", "Node.js", "Crypto"],
        },
      ],
    },
  };

  const tabs = [
    {
      id: "web",
      label: "Web Apps",
      count: projectSections.web.projects.length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: projectSections.mobile.projects.length,
    },
    {
      id: "desktop",
      label: "Desktop Apps",
      count: projectSections.desktop.projects.length,
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-xl font-semibold text-zinc-200 mb-8">
        Featured Projects
      </h2>

      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-emerald-500 text-emerald-400"
                  : "border-transparent text-zinc-400 hover:text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Project Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium text-zinc-300 mb-6">
            {projectSections[activeTab].title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectSections[activeTab].projects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="h-32 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-white mb-2">{project.title}</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Projects;
