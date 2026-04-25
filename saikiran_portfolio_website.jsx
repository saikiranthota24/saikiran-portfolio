import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const projects = [
  {
    title: "Sales Intelligence Dashboard",
    impact: "Reduced manual reporting by 40% | 100K+ rows",
    desc: "Interactive Power BI dashboard with DAX measures, drill-throughs, and KPI tracking.",
  },
  {
    title: "APS Failure Prediction",
    impact: "Improved predictive maintenance accuracy",
    desc: "ML models to predict truck failures using UCI dataset (EDA + model comparison).",
  },
  {
    title: "SQL Business Insights",
    impact: "Faster reporting & decision-making",
    desc: "Advanced SQL queries to extract insights and optimize reporting pipelines.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Saikiran Thota
        </motion.h1>
        <p className="text-xl text-gray-400 mb-4">
          Data Analyst | MSc Data Science (UK)
        </p>
        <p className="max-w-xl mx-auto text-gray-500 mb-8">
          I turn complex data into business decisions using SQL, Python, and Power BI.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-2xl">
            View Projects
          </a>
          <a href="/resume.pdf" className="border px-6 py-3 rounded-2xl flex items-center gap-2">
            <Download size={16} /> Resume
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto pb-20">
        {["4+ Years Experience", "100K+ Data Processed", "40% Efficiency Gain"].map((item) => (
          <div key={item} className="bg-gray-900 p-6 rounded-2xl text-center">
            {item}
          </div>
        ))}
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          Data Analyst with 4+ years of experience delivering data-driven solutions across analytics, machine learning, and BI. Currently pursuing MSc Data Science in the UK, focused on building scalable dashboards and extracting actionable insights.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-10">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-center">
          {["SQL", "Python", "Power BI", "Tableau", "Excel"].map((s) => (
            <div key={s} className="bg-gray-900 p-4 rounded-xl">{s}</div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-green-400 mb-2">{p.impact}</p>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center bg-gray-950">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          Open to Data Analyst / BI roles in the UK
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:thotasai867@gmail.com"><Mail /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Github /></a>
        </div>
      </section>
    </div>
  );
}
