export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs text-text-muted font-mono">
          Built with React + TypeScript + Tailwind CSS
        </p>
        <p className="text-xs text-text-muted/60 mt-1">
          &copy; {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
