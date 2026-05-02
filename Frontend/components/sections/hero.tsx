'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000080] px-4 sm:px-6 lg:px-8">
      {/* // Placeholder for "Hyperspeed" (Navy theme) background component */}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand Identity */}
        <div className="mb-8 inline-block">
          <p className="text-primary text-lg sm:text-xl font-semibold tracking-wide mb-2">
            Welcome to
          </p>
          {/* // Placeholder for "Text Pressure" for the word "OgiTech" */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
            OgiTech
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* // Placeholder for "Blur Text" for the phrase "Engineering Digital Excellence" */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
          Engineering Digital Excellence with Precision AI &{' '}
          <span className="text-primary">IoT Architecture</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 text-balance mb-12 leading-relaxed max-w-2xl mx-auto">
          A technical collective of computer science and systems information experts based in Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start Your Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary/60 text-foreground font-semibold px-8"
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
