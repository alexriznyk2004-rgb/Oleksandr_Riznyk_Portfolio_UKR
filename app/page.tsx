import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Profile } from '@/components/profile'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
