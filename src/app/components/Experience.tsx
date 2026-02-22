import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led a team of 5 developers on major product releases",
      "Implemented CI/CD pipeline improving deployment efficiency by 40%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and stakeholders to deliver high-quality solutions.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Improved code quality with comprehensive testing strategies",
      "Mentored 3 junior developers in best practices",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Created responsive and interactive user interfaces for various web applications. Worked closely with UX designers to implement pixel-perfect designs.",
    achievements: [
      "Developed reusable component library used across 10+ projects",
      "Increased user engagement by 35% through UI improvements",
      "Implemented accessibility standards (WCAG 2.1)",
    ],
  },
];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("workExperience")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("experienceSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"
                    >
                      <Briefcase className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">{t("keyAchievements")}</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}