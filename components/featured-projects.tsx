import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Skincare E-commerce",
    description: "A premium shopping experience for skincare enthusiasts with cart and payment features.",
    image: "/premium-skincare-website-design.jpg",
    tags: ["Next.js", "Stripe", "Tailwind"],
    github: "https://github.com/astha9900/Skincare",
    demo: "https://skincare-ecommerce-zxlk.vercel.app/",
  },
  {
    title: "Smart Restaurant",
    description: "An integrated system for restaurant management, ordering, and real-time updates.",
    image: "/modern-restaurant-dashboard-ui.jpg",
    tags: ["React", "NodeJS", "MongoDB"],
    github: "https://github.com/astha9900/smart-restaurant-system-main",
    demo: "https://smart-restaurant-system-kappa.vercel.app/",
  },
]

export function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold">Projects</h2>
        <Button variant="ghost" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Card key={i} className="overflow-hidden rounded-3xl border-none shadow-xl hover:shadow-2xl transition-all">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex gap-2 mb-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full bg-primary/10 text-primary border-none">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="gap-4">
              <Button asChild size="sm" className="rounded-full">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
