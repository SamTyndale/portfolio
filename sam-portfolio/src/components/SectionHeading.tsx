export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <p className="font-mono text-xs text-signal mb-4">{kicker}</p>
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-ink-dim mt-4 leading-relaxed max-w-lg">{description}</p>
      )}
    </div>
  )
}
