import { motion } from "framer-motion";

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: "Ministry of Egyptian Defence",
      position: "Software Engineer",
      duration: "10/2024 - Present",
      location: "Egypt",
      description:
        "Developing and maintaining software solutions for defense systems. Working on critical applications with high security and performance requirements.",
      achievements: [
        "Contributing to national defense software infrastructure",
        "Implementing secure coding practices and protocols",
        "Collaborating with cross-functional teams on complex systems",
      ],
      tech: ["Oracle DB", "Oracle APEX", "IReport", "Laravel", "PHP"],
    },
    {
      id: 2,
      company: "Freelancer",
      position: "Full-Stack Developer",
      duration: "06/2022 - 05/2024",
      location: "Remote",
      description:
        "Worked as a freelance developer specializing in real estate applications with AI integration. Delivered graduation projects for students with modern web technologies.",
      achievements: [
        "Completed 2 graduation projects in real estate with AI features",
        "Integrated AI algorithms for property valuation and recommendations",
        "Built responsive web applications with modern UI/UX design",
        "Managed full project lifecycle from concept to deployment and testing",
      ],
      tech: ["PHP", "Laravel", "Python", "Flask", "AI/ML"],
    },
    {
      id: 3,
      company: "ONLINE Student Activity",
      position: "Volunteer PHP Mentor",
      duration: "10/2022 - 05/2023",
      location: "Remote",
      description: "Worked as a Volunteer PHP Mentor for students.",
      achievements: [
        "Guided and taught +20 students in PHP programming and best practices",
        "Assisted in the development of student projects",
        "Conducted code reviews and provided constructive feedback",
        "Organized workshops on PHP and web development",
      ],
      tech: ["PHP", "MVC", "MySQL", "JavaScript", "HTML/CSS"],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-zinc-200 mb-8">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-zinc-800"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-emerald-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-zinc-400 mt-1 sm:mt-0">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-zinc-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zinc-200 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-zinc-400 flex items-start"
                        >
                          <span className="text-emerald-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WorkExperience;
