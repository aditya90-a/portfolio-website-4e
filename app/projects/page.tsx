import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const allProjects = [
  {
    title: "Skincare E-commerce",
    description: "A premium shopping experience for skincare enthusiasts.",
    image: "/luxury-skincare-website-minimal-ui.jpg",
    tags: ["Next.js", "Typescript", "Tailwind"],
    github: "https://github.com/astha9900/Skincare",
    demo: "https://skincare-ecommerce-zxlk.vercel.app/",
  },
  {
    title: "Smart Restaurant",
    description: "Digital transformation for modern dining experiences.",
    image: "/restaurant-dashboard-ordering-system-interface.jpg",
    tags: ["React", "Typescript", "JS"],
    github: "https://github.com/astha9900/smart-restaurant-system-main",
    demo: "https://smart-restaurant-system-kappa.vercel.app/",
  },
  {
    title: "Wanderlust",
    description: "Short-term property rental platform with seamless UX.",
    image: "/travel-booking-app-ui-minimal.jpg",
    tags: ["NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/astha9900/Wanderlust",
    demo: "https://wanderlust-w927.onrender.com/",
  },
  {
    title: "Virtual Mouse Gesture",
    description: "AI-powered hands-free computer control using finger gestures.",
    image: "/ai-hand-gesture-recognition-tech-dark-ui.jpg",
    tags: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/astha9900/Virtual-Mouse",
    demo: null,
  },
  {
    title: "Driver Drowsiness System",
    description: "Safety-focused AI system detecting driver fatigue in real-time.",
    image: "/driver-drowsiness-detection-system-vision-ai.jpg",
    tags: ["Python", "Computer Vision"],
    github: "https://github.com/astha9900/Driver-Drowsiness-System",
    demo: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="font-serif text-6xl md:text-8xl font-medium mb-6">Projects</h1>
        <p className="text-muted-foreground text-lg">
          A collection of projects spanning e-commerce, AI, and full-stack applications. Each piece represents a unique
          challenge and a specialized solution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {allProjects.map((project, i) => (
          <Card
            key={i}
            className="group overflow-hidden rounded-[2.5rem] border-none shadow-xl bg-card/50 backdrop-blur-sm"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex gap-4">
                  {project.demo && (
                    <Button asChild variant="secondary" className="rounded-full">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="secondary" className="rounded-full">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <CardHeader className="pt-8 px-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="font-serif text-3xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="pb-8 px-8 flex justify-start gap-4 lg:hidden">
              {project.demo && (
                <Button asChild size="sm" className="rounded-full">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" size="sm" className="rounded-full bg-transparent">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
