"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-primary italic">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. Drop me a message and I'll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <a
                  href="mailto:asthabharti9900@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  asthabharti9900@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-secondary/30 text-secondary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <a href="tel:+919661644321" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9661644321
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-accent/30 text-accent-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-muted-foreground">Motihari, Bihar, India</p>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h4 className="font-bold text-lg mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/50" asChild>
                  <a href="https://github.com/astha9900" target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/50" asChild>
                  <a href="https://linkedin.com/in/astha-bharti-263586231/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-2xl rounded-[2.5rem] bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Your Name</label>
                      <Input className="rounded-2xl h-12 bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Your Email</label>
                      <Input type="email" className="rounded-2xl h-12 bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Subject</label>
                    <Input className="rounded-2xl h-12 bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Message</label>
                    <Textarea
                      placeholder="Your message here..."
                      className="rounded-3xl min-h-[150px] bg-background/50"
                    />
                  </div>
                  <Button className="w-full rounded-full h-14 text-lg font-bold group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
