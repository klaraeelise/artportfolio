import Link from "next/link";

type Project = {
  title: string;
  description: string;
  status: "in-progress" | "complete" | "planned";
  href: string;
};

const projects: Project[] = [
  {
    title: "Vocabulary App",
    description:
      "A personal language learning app with flashcards, spaced repetition, and dictionary scraping. Built with Go, Python, and Next.js.",
    status: "in-progress",
    href: "/projects/vocab-app",
  },
  {
    title: "QA Dashboard",
    description:
      "An internal tool to visualise quality assurance metrics and job reporting coverage using Laravel and Bootstrap.",
    status: "in-progress",
    href: "/projects/qa-dashboard",
  },
  // Add more as needed
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-foam space-y-12">
      <h1 className="text-4xl font-serif text-biolume">Projects</h1>
      <p className="text-lg text-foam/90">
        Here’s a glimpse into some things I’ve been building — from language tools to monitoring dashboards.
        Some are still in progress, others will be expanded with demos and write-ups soon.
      </p>

      <section className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="block bg-white/5 border border-kelp hover:border-glow rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-foam/80">{project.description}</p>
            <span className="text-xs text-foam/60">{project.status}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}