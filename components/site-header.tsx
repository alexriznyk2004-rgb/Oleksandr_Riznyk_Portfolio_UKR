'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { nav, person } from '@/lib/cv-data'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <div className="label overflow-hidden text-white">
            <AnimatePresence mode="wait">
              <motion.button
                key={scrolled ? 'cv' : 'portfolio'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="cursor-pointer"
              >
                {scrolled ? 'Oleksandr R. — CV' : `Portfolio / ${person.year}`}
              </motion.button>
            </AnimatePresence>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="label flex items-center gap-3 text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="flex h-3 w-5 flex-col justify-between">
              <motion.span
                className="h-px w-full bg-white"
                animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              />
              <motion.span className="h-px w-full bg-white" animate={{ opacity: open ? 0 : 1 }} />
              <motion.span
                className="h-px w-full bg-white"
                animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 md:px-12"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <motion.button
                    onClick={() => go(item.id)}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex w-full items-baseline gap-4 py-1 text-left font-sans text-4xl font-extrabold tracking-tight text-ink-foreground transition-colors hover:text-accent md:text-7xl"
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="label mt-12 text-ink-muted">{person.email}</div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
