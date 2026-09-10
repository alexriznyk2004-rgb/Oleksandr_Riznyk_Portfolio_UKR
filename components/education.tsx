import { education } from '@/lib/cv-data'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="03" title="Education" />
        <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-12">
          <Reveal className="md:col-span-6" as="div">
            <h3 className="font-sans text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              {education.school}
            </h3>
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-6 md:pl-8">
            <Reveal as="p" delay={0.1}>
              <span className="label text-accent">{education.degree}</span>
            </Reveal>
            <Reveal as="p" delay={0.15} className="max-w-xl text-sm leading-relaxed text-foreground/90">
              {education.description}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
