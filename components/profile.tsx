'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/section-label'

// The statement is broken into fragments so specific phrases can be emphasized.
const fragments: { text: string; tone?: 'muted' | 'accent' }[] = [
  { text: 'Я дизайнер інтер’єру та 3D-візуалізатор, який спеціалізується на ' },
  { text: 'фотореалістичній візуалізації інтер’єрів та архітектури.', tone: 'muted' },
  { text: 'Створюю високоякісні візуалізації інтер’єрів, архітектури, меблів і продукції, приділяючи особливу увагу. ' },
  { text: 'з особливим акцентом на матеріали, освітлення, композицію та деталізацію', tone: 'accent' },
  { text: 'Відкритий до нових професійних можливостей у сфері дизайну інтер’єру та візуалізації.' },
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
