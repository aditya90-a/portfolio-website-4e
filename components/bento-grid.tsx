"use client"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layers, Layout, Smartphone } from "lucide-react"

const features = [
  {
    title: "Full Stack Mastery",
    description: "Expertise in both frontend and backend technologies including NodeJS, Express, and MongoDB.",
    icon: <Globe className="h-6 w-6" />,
    className: "md:col-span-2 bg-primary/5",
  },
  {
    title: "Mobile First",
    description: "Building responsive applications that look stunning on every device.",
    icon: <Smartphone className="h-6 w-6" />,
    className: "bg-secondary/20",
  },
  {
    title: "UI/UX Driven",
    description: "Creating intuitive interfaces using Tailwind CSS and Material UI.",
    icon: <Layout className="h-6 w-6" />,
    className: "bg-accent/30",
  },
  {
    title: "Data Structures",
    description: "Strong foundation in DSA with 400+ problems solved on LeetCode.",
    icon: <Code className="h-6 w-6" />,
    className: "md:col-span-2 bg-muted",
  },
  {
    title: "Java Specialist",
    description: "Certified Java developer with deep knowledge of Object Oriented Programming.",
    icon: <Layers className="h-6 w-6" />,
    className: "bg-primary/10",
  },
  {
    title: "Scalable Systems",
    description: "Designing efficient databases with MySQL and MongoDB for high performance.",
    icon: <Database className="h-6 w-6" />,
    className: "bg-secondary/10",
  },
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`rounded-3xl p-8 flex flex-col justify-between border group hover:border-primary/50 transition-colors ${feature.className}`}
        >
          <div className="p-3 rounded-2xl bg-background w-fit shadow-sm group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
