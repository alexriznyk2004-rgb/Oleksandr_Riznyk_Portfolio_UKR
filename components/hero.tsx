'use client'

import { motion } from 'framer-motion'
import { person } from '@/lib/cv-data'

const rise = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full flex-col justify-between overflow-hidden">
      {/* background render */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero-interior.png"
          alt="Photorealistic interior visualization of a minimalist living room"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/25" />
      </motion.div>

      {/* top meta row */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-24 md:px-12">
        <motion.span
          className="label text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Portfolio / {person.year}
        </motion.span>
        <motion.span
          className="label text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {person.location}
        </motion.span>
      </div>

      {/* name */}
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="font-sans text-[19vw] font-extrabold leading-[0.82] tracking-[-0.03em] text-foreground md:text-[15vw]">
          <span className="block overflow-hidden">
            <motion.span className="block" variants={rise} custom={0} initial="hidden" animate="show">
              {person.firstName}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" variants={rise} custom={1} initial="hidden" animate="show">
              {person.lastName}
              <span className="text-accent">.</span>
            </motion.span>
          </span>
        </h1>
      </div>

      {/* bottom row */}
      <div className="relative z-10 flex flex-col gap-4 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-12">
        <motion.p
          className="label max-w-md text-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {person.role}
        </motion.p>
        <motion.div
          className="label flex items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span>Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
