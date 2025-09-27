export default function Footer() {
  return (
    <footer className="bg-sand text-abyss border-t mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>&copy; {new Date().getFullYear()} Klara Elise Pfeiffer. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="mailto:klara.elise.pfeiffer@gmail.com" className="hover:text-sky-600">
            📧 Email
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
            💻 GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
            💼 LinkedIn
          </a>
          <a href="https://instagram.com/klaraeelise" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
            🌈 Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
