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
        More than two thousand years after it was written, <em>The Art of War</em> still reads like a
        guide for entering a new market. Sun Tzu's main point is simple: the smartest general wins the
        fight before it even begins.
      </p>

      <Section title="1. Know the terrain — know the market.">
        <p>
          Sun Tzu says victory belongs to the leader who studies the ground before stepping onto it.
          In business, the{" "}
          <Term definition="In Sun Tzu, the physical ground of battle. In business, the full landscape a company operates in: customers, regulators, competitors, and cultural mood.">
            "terrain"
          </Term>{" "}
          is the market itself. It includes the customers, the rules, the rival companies, and even
          the mood of the public. A founder who launches a product without studying that ground has,
          by Sun Tzu's standard, already lost.
        </p>
        <p>
          For marketing, this is very direct. You need to know who you are talking to (the terrain) and
          who else is talking to them (the rival). A smart{" "}
          <Term definition="A person who plans long-term moves to gain advantage, weighing strengths, weaknesses, timing, and the moves of others — not just executing tactics.">
            strategist
          </Term>{" "}
          with a smaller budget can still win, because they understand the ground their rival is
          stumbling across.
        </p>
      </Section>

      <Section title="2. Win without fighting.">
        <p>
          The most famous line in <em>The Art of War</em> says that the best win is one where you beat
          your enemy without fighting at all. Mark McNeilly turns this into a business rule: take over
          a market by inventing something new instead of starting{" "}
          <Term definition="A competitive race in which rivals repeatedly cut prices to undercut each other, often shrinking everyone's profit until only the cheapest survives.">
            price wars
          </Term>.
        </p>
        <p>
          Apple's iPhone launch is McNeilly's main example. Apple did not try to beat Nokia or BlackBerry
          on price. Instead, it changed what people thought a phone should be, and price stopped being
          the main question. That is winning without fighting. You make the other side's plan useless
          instead of crashing into it.
        </p>
      </Section>

      <Section title="3. Attack weakness, not strength.">
        <p>
          Sun Tzu warns against a{" "}
          <Term definition="A direct, head-on attack against the strongest, most defended part of an opponent — usually costly and rarely decisive.">
            frontal assault
          </Term>{" "}
          on a strong position. McNeilly applies this idea to business by saying you should look for the
          gaps a rival has left open instead of fighting them where they are strongest.
          He says Microsoft did not win by building better tech than IBM.
          It won by claiming the operating system, a spot IBM was barely guarding.
        </p>
      </Section>

      <Section title="4. Speed and the mind game.">
        <p>
          Sun Tzu values speed. A war that drags on too long burns through money and wears down the soldiers.
          In the startup world today, people call this
          "shipping fast,"{" "}
          <Term definition="The competitive edge a company gains by being the first to enter a new market — capturing customers, brand recognition, and key partnerships before rivals arrive.">
            "first-mover advantage,"
          </Term>{" "}
          and{" "}
          <Term definition="A startup tactic, coined by Reid Hoffman, of prioritizing breakneck growth over efficiency in order to dominate a market before competitors can react.">
            "blitzscaling."
          </Term>{" "}
          The mind-game side is just as old. A rival who already feels beaten will stop putting real
          effort into the fight.
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
