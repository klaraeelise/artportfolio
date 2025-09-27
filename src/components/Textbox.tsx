import Link from "next/link";

export default function Textbox({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block bg-white/5 border border-kelp hover:border-glow text-foam rounded-xl p-6 transition-all shadow-md hover:shadow-2xl hover:scale-[1.02]"
    >
      <h2 className="text-lg font-serif font-medium group-hover:text-glow transition-colors">
        {title}
      </h2>
      <p className="mt-2 text-sm text-foam">{body}</p>
    </Link>
  );
}