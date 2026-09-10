import { skills } from '@/lib/cv-data'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const columns = [
  { title: 'Expertise', items: skills.expertise },
  { title: 'Tools', items: skills.tools },
  { title: 'Methods', items: skills.methods },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-end">
          <div className="flex flex-col items-start gap-8 md:items-end">
            <SectionLabel index="04" title="Skills" />
            <h2 className="font-sans text-5xl font-extrabold tracking-tight md:text-6xl">
              Professional Skills
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-y-14 border-t border-line pt-12 md:grid-cols-3 md:gap-x-8">
          {columns.map((col, c) => (
            <div key={col.title} className="flex flex-col gap-6 md:border-l md:border-line md:pl-8 md:first:border-l-0 md:first:pl-0">
              <Reveal as="p" delay={c * 0.05}>
                <span className="label text-muted-foreground">{col.title}</span>
              </Reveal>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, i) => (
                  <Reveal as="li" key={item} delay={c * 0.05 + i * 0.03}>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
