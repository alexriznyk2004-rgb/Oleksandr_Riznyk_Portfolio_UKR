'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/section-label'

// The statement is broken into fragments so specific phrases can be emphasized.
const fragments: { text: string; tone?: 'muted' | 'accent' }[] = [
  { text: 'I\u2019m a 3D Visualizer and Interior Designer specializing in ' },
  { text: 'photorealistic architectural and product visualization', tone: 'muted' },
  { text: '. I create high-quality visuals for interiors, architecture, furniture, and product design, with a strong focus on ' },
  { text: 'materials, lighting, composition, and detail', tone: 'accent' },
  { text: '. Currently open to new opportunities in visualization and interior design.' },
]

export function Profile() {
  return (
    <section id="profile" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="01" title="Profile" />
        <p className="mt-10 max-w-6xl font-sans text-[7vw] font-medium leading-[1.12] tracking-tight md:mt-14 md:text-5xl md:leading-[1.15]">
          {fragments.map((f, i) => (
            <motion.span
              key={i}
              className={
                f.tone === 'muted'
                  ? 'text-muted-foreground'
                  : f.tone === 'accent'
                    ? 'text-accent'
                    : 'text-foreground'
              }
              initial={{ opacity: 0.15 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: 'easeOut' }}
            >
              {f.text}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}
