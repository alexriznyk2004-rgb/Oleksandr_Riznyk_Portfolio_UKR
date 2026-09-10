'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/lib/cv-data'
import { SectionLabel } from '@/components/section-label'

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  // Move horizontally across the panels. Two panels => shift almost one panel width.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-52%'])

  return (
    <section id="experience" className="scroll-mt-24">
      {/* header */}
      <div className="px-6 pt-24 md:px-12 md:pt-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-8">
            <SectionLabel index="02" title="Experience" />
            <h2 className="font-sans text-5xl font-extrabold tracking-tight md:text-6xl">
              Work Experience
            </h2>
          </div>
          <p className="label hidden text-muted-foreground md:block">Scroll →</p>
        </div>
      </div>

      {/* pinned horizontal track (desktop) */}
      <div ref={trackRef} className="relative hidden h-[260vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-24 px-12">
            {experience.map((job) => (
              <ExperienceCard key={job.company} job={job} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* stacked (mobile) */}
      <div className="flex flex-col gap-16 px-6 py-16 md:hidden">
        {experience.map((job) => (
          <ExperienceCard key={job.company} job={job} mobile />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({
  job,
  mobile,
}: {
  job: (typeof experience)[number]
  mobile?: boolean
}) {
  return (
    <div
      className={
        mobile
          ? 'flex flex-col border-t border-line pt-6'
          : 'flex w-[46vw] shrink-0 flex-col border-l border-line pl-12'
      }
    >
      <span className="font-sans text-[26vw] font-extrabold leading-none tracking-tighter text-foreground md:text-[14rem]">
        {job.year}
      </span>
      <div className="mt-6 md:mt-8">
        <h3 className="font-sans text-3xl font-bold tracking-tight md:text-4xl">{job.company}</h3>
        <p className="label mt-3 text-muted-foreground">
          {job.title} — {job.period}
        </p>
      </div>
      <ul className="mt-8 flex flex-col gap-5">
        {job.bullets.map((b, i) => (
          <motion.li
            key={i}
            className="flex gap-4 text-sm leading-relaxed text-foreground/90"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden />
            <span className="max-w-xl">{b}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
