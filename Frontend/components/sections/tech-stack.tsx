'use client'

export function TechStackSection() {
  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'TensorFlow',
    'Python',
    'Docker',
    'AWS',
    'PostgreSQL',
    'Laravel',
    'Node.js',
    'Kubernetes',
    'GraphQL',
  ]

  return (
    <section
      id="tech-stack"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our Technology Stack
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Modern tools and frameworks that power our solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 flex items-center justify-center min-h-[120px] hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="text-center font-semibold text-foreground group-hover:text-accent transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
