'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { about } from '@/lib/cv-data'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="05" title="About" />
        <h2 className="mt-8 font-sans text-5xl font-extrabold tracking-tight md:text-6xl">
          About Me
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <div ref={ref} className="md:col-span-5">
            <div className="overflow-hidden">
              <motion.img
                style={{ y }}
                src="/images/portrait.png"
                alt="Portrait of Oleksandr Riznyk"
                className="aspect-[4/5] w-full scale-110 object-cover grayscale"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            {about.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className="text-sm leading-relaxed text-foreground/90 md:text-base">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
