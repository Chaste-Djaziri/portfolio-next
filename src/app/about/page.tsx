import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Chaste Djaziri',
  description: 'Get to know Chaste Djaziri, a software developer and creative exploring technology, music, art, and movement.',
};

const strengths = [
  { number: '01', title: 'Software', text: 'Turning complex ideas into approachable, useful products — from interfaces to cross-platform experiences.' },
  { number: '02', title: 'Music', text: 'Piano gives me another language to express ideas and a different perspective on rhythm, craft and creation.' },
  { number: '03', title: 'Art & motion', text: 'Drawing, visual storytelling and skating keep me curious about how things look, move and feel.' },
];

const tools = ['TypeScript', 'React', 'Next.js', 'Flutter', 'Python', 'UI/UX', 'Creative coding'];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <nav aria-label="Main navigation" className="flex items-center justify-between py-8">
          <Link href="/" className="text-lg font-black tracking-tight">CD<span className="text-lime-300">X</span></Link>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/about" aria-current="page" className="text-lime-300">About</Link>
            <Link href="/#work" className="transition hover:text-white">Work</Link>
          </div>
        </nav>

        <header className="relative border-b border-white/10 py-24 sm:py-32">
          <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
          <p className="mb-7 text-sm font-medium uppercase tracking-[.3em] text-lime-300">A little about me / 001</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[1.05] tracking-[-.065em] sm:text-8xl">
            More than <span className="text-lime-300">code.</span>
          </h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-zinc-400">
            Hey, I’m Chaste Djaziri — a software developer, pianist, artist and skater.
            I’m interested in building technology that solves real problems and feels genuinely good to use.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300">Based in Germany</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300">Originally from Rwanda</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300">Always learning</span>
          </div>
        </header>

        <section className="grid gap-12 border-b border-white/10 py-24 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm uppercase tracking-[.24em] text-lime-300">01 / My story</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Curiosity is my starting point.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>I’m from Rwanda and currently studying computer science in Germany. I enjoy learning how software works under the surface — and using what I learn to create things people can actually use.</p>
            <p>For me, creativity isn’t separate from engineering. The patience I learn at the piano, the experimentation I bring to drawing, and the freedom I find in skating all shape how I approach software.</p>
            <p>I’m especially excited by thoughtful product design, artificial intelligence, and experiences that bridge the physical and digital worlds.</p>
          </div>
        </section>

        <section className="border-b border-white/10 py-24">
          <p className="text-sm uppercase tracking-[.24em] text-lime-300">02 / What drives me</p>
          <h2 className="mt-5 mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">Different disciplines. One mindset.</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.number} className="min-h-64 rounded-3xl border border-white/10 bg-zinc-900/60 p-7">
                <span className="text-sm text-lime-300">{item.number} /</span>
                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-white/10 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[.24em] text-lime-300">03 / My toolbox</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Always building. Always evolving.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {tools.map((tool) => <span key={tool} className="rounded-full border border-white/15 px-5 py-3 text-zinc-300">{tool}</span>)}
          </div>
        </section>

        <section className="py-24 text-center">
          <p className="text-sm uppercase tracking-[.24em] text-lime-300">04 / What’s next</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Let’s make something meaningful.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-400">Explore the things I’m building, and follow along as I keep learning, experimenting and creating.</p>
          <Link href="/#work" className="mt-9 inline-flex rounded-full bg-lime-300 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-lime-200">Explore my projects ↗</Link>
        </section>
        <footer className="flex flex-col justify-between gap-4 border-t border-white/10 py-10 text-sm text-zinc-500 sm:flex-row"><span>© {new Date().getFullYear()} Chaste Djaziri</span><Link href="/" className="hover:text-white">Back to home ↑</Link></footer>
      </div>
    </main>
  );
}
