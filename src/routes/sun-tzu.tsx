import { createFileRoute, Link } from "@tanstack/react-router";
import { Term } from "@/components/Term";

export const Route = createFileRoute("/sun-tzu")({
  head: () => ({
    meta: [
      { title: "Sun Tzu in Modern Business — Strategists & CEOs" },
      { name: "description", content: "How Sun Tzu's Art of War shapes modern business strategy: winning without fighting, knowing the terrain, attacking weakness." },
    ],
  }),
  component: SunTzuPage,
});

function SunTzuPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-jade">The Eastern General</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Sun Tzu in the Boardroom</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        <em>The Art of War</em> is over 2,000 years old and somehow still reads like a guide for
        launching a startup. Sun Tzu's main idea is pretty simple: the best general doesn't barely win
        a hard fight. The best general wins before the fight even starts.
      </p>

      <Section title="1. Know the ground you're standing on.">
        <p>
          Sun Tzu says you can't win a battle if you don't know the land you're fighting on. In
          business, that "land" is the{" "}
          <Term definition="In Sun Tzu, the physical ground of battle. In business, the full landscape a company operates in: customers, regulators, competitors, and cultural mood.">
            market
          </Term>{" "}
          itself. Who your customers are, what the laws are, what your rivals are doing, even what
          mood people are in. A founder who skips all that and just launches something has, by Sun
          Tzu's rules, already kind of lost.
        </p>
        <p>
          For marketing, this is super direct. You need to know who you're actually talking to, and
          who else is talking to them. A clever{" "}
          <Term definition="A person who plans long-term moves to gain advantage, weighing strengths, weaknesses, timing, and the moves of others — not just executing tactics.">
            strategist
          </Term>{" "}
          with way less money can still win, because they actually understand the ground their richer
          rival is tripping over.
        </p>
      </Section>

      <Section title="2. The best win is the one you don't have to fight for.">
        <p>
          The most quoted line in <em>The Art of War</em> is that the best victory is one where you
          beat your enemy without actually fighting them. Mark McNeilly turns this into a business
          rule. Instead of grinding into{" "}
          <Term definition="A competitive race in which rivals repeatedly cut prices to undercut each other, often shrinking everyone's profit until only the cheapest survives.">
            price wars
          </Term>
          , build something new enough that the fight isn't even on the same field.
        </p>
        <p>
          The iPhone is McNeilly's go-to example. Apple didn't try to undercut Nokia or BlackBerry.
          They made something that made the question of price kind of irrelevant. That's what winning
          without fighting actually looks like. You don't beat the other side. You make their plan not
          matter.
        </p>
      </Section>

      <Section title="3. Hit where they're weak, not where they're strong.">
        <p>
          Sun Tzu basically says don't run straight at the wall. Don't throw a{" "}
          <Term definition="A direct, head-on attack against the strongest, most defended part of an opponent — usually costly and rarely decisive.">
            frontal assault
          </Term>{" "}
          at the strongest part of your enemy. McNeilly's business version: look for the spot your
          rival isn't really watching. Microsoft didn't beat IBM by building cooler hardware. They
          quietly grabbed the operating system, which IBM wasn't even guarding that hard.
        </p>
      </Section>

      <Section title="4. Move fast, and get in their head.">
        <p>
          Sun Tzu hates long wars. The longer the fight, the more it costs and the more tired
          everyone gets. Today people just call this "shipping fast,"{" "}
          <Term definition="The competitive edge a company gains by being the first to enter a new market — capturing customers, brand recognition, and key partnerships before rivals arrive.">
            "first-mover advantage,"
          </Term>{" "}
          or{" "}
          <Term definition="A startup tactic, coined by Reid Hoffman, of prioritizing breakneck growth over efficiency in order to dominate a market before competitors can react.">
            "blitzscaling."
          </Term>{" "}
          Same idea, new label. And the psychological side is just as old. If a rival already thinks
          they've lost, they stop really trying. Half the battle is making them believe the result
          before it actually happens.
        </p>
      </Section>

      <Pullquote>
        Having the best product doesn't mean you will win. A strong strategist can win while being down.
      </Pullquote>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/machiavelli" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
          Cross to the West: Machiavelli →
        </Link>
        <Link to="/game" className="rounded-full seal px-6 py-3 text-sm hover:opacity-90 transition">
          Test your strategy →
        </Link>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">{children}</div>
    </section>
  );
}

function Cite({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs text-muted-foreground"> {children}</span>;
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-16 border-l-4 border-accent pl-6 font-display text-2xl italic leading-snug text-balance">
      "{children}"
    </blockquote>
  );
}
