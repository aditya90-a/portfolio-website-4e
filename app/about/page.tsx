import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Code2 } from "lucide-react"

const education = [
  {
    institution: "Chandigarh University, Mohali",
    degree: "Bachelor's in Computer Science Engineering",
    period: "2021 – 2025",
  },
  {
    institution: "LND College, Motihari",
    degree: "Intermediate (PCM)",
    period: "April 2019 – March 2020",
  },
]

const skills = [
  { category: "Languages", items: ["C++", "Java", "Python", "JavaScript", "SQL"] },
  { category: "Frameworks", items: ["Node.js", "Express.js", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
]

const achievements = [
  "Solved 400+ DSA problems on LeetCode",
  "Secured 740 All India Rank in CodeKaze Sept 2024",
  "Specialization in Java by LearnQuest (Coursera)",
  "Top 5% in NPTEL Probability and Statistics",
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="lg:col-span-2">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">
            Building the <span className="text-primary italic">Future</span> of Web
          </h1>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            I'm a Computer Science graduate from Chandigarh University with a passion for building elegant, functional
            applications. My journey started with a curiosity for how things work on the web, which led me to master
            Java and modern web technologies.
          </p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            When I'm not coding, you'll find me solving complex algorithmic challenges on LeetCode or exploring new
            design trends to bring a touch of sophistication to my projects.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" /> 400+
              </h4>
              <p className="text-sm text-muted-foreground">DSA Problems</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Top 5%
              </h4>
              <p className="text-sm text-muted-foreground">NPTEL Certified</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <Card key={i} className="border-none shadow-md bg-card/50">
                <CardContent className="p-6">
                  <span className="text-sm text-primary font-medium">{edu.period}</span>
                  <h3 className="text-xl font-bold mt-1">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-primary" /> Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i}>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline" className="rounded-full bg-background border-primary/20">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-bold mt-12 mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" /> Achievements
          </h2>
          <ul className="space-y-4">
            {achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground italic">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {ach}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
