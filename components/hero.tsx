"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary/50 backdrop-blur-sm mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8"
        >
          Building <span className="italic font-light">interfaces</span> that feel right.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[600px] text-muted-foreground text-xl md:text-2xl mb-12 leading-relaxed font-light"
        >
          I'm Astha Bharti, a Full Stack Developer focusing on clean code and exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/astha9900" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com/in/astha-bharti" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}
