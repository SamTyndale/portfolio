export function Footer() {
  return (
    <footer className="container-px border-t border-line py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-faint">
      <div>
        <span className="text-ink-dim">Sam</span> — ECE Student · Developer · Builder
      </div>
      <div>© {new Date().getFullYear()}. Built from scratch.</div>
    </footer>
  )
}
