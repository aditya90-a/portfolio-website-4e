import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { FeaturedProjects } from "@/components/featured-projects"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <section className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center">
          Building Digital <span className="text-primary italic">Elegance</span>
        </h2>
        <BentoGrid />
      </section>
      <FeaturedProjects />
    </div>
  )
}
