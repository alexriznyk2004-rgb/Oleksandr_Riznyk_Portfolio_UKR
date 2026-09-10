import { Reveal } from '@/components/reveal'

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="label flex items-center gap-2 text-muted-foreground" as="div">
      <span>({index})</span>
      <span aria-hidden>—</span>
      <span>{title}</span>
    </Reveal>
  )
}
