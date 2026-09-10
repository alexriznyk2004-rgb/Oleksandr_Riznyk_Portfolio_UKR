'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { person } from '@/lib/cv-data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto flex min-h-svh max-w-[1400px] flex-col justify-between px-6 py-24 md:px-12 md:py-28">
        {/* top row */}
        <div className="flex items-center justify-between">
          <span className="label text-ink-muted">(06) — Contact</span>
          <span className="label text-ink-muted">Open to opportunities</span>
        </div>

        {/* headline */}
        <motion.h2
          className="mt-16 font-sans text-[22vw] font-extrabold leading-[0.8] tracking-[-0.03em] md:mt-0 md:text-[15vw]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Let&apos;s
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-accent"
              variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Build.
            </motion.span>
          </span>
        </motion.h2>

        {/* email */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <button
            onClick={copy}
            className="font-sans text-2xl font-medium tracking-tight text-ink-foreground transition-colors hover:text-accent md:text-4xl"
          >
            {person.email}
          </button>
          <span className="label text-ink-muted">{copied ? 'Copied!' : 'Click to copy'}</span>
        </div>

        {/* footer */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 md:mt-24">
          <span className="label text-ink-muted">
            © {person.year} {person.firstName} {person.lastName}
          </span>
          <span className="label hidden text-ink-muted md:block">All rights reserved</span>
        </div>
      </div>
    </section>
  )
}
