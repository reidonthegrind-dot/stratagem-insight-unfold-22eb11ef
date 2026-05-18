import { createFileRoute, Link } from "@tanstack/react-router";
import { Term } from "@/components/Term";

export const Route = createFileRoute("/machiavelli")({
  head: () => ({
    meta: [
      { title: "Machiavelli in Modern Business — Strategists & CEOs" },
      { name: "description", content: "How Machiavelli's Prince shapes the modern CEO: perception, power, and the lion-and-fox doctrine." },
    ],
  }),
  component: MachPage,
});

function MachPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson">The Western Prince</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Machiavelli in the C-Suite</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        <em>The Prince</em> isn't really a book about being a good person. It's a book about staying
        on top once you're there. Swap out the old Florence map for a company org chart and honestly,
        a lot of it still hits.
      </p>

      <Section title="1. Job number one: don't let it fall apart.">
        <p>
          For Machiavelli's prince, the only goal that really matters is keeping the state in one
          piece. The modern version is pretty obvious. A CEO's first job, at least from the board's
          point of view, is keeping the company alive and{" "}
          <Term definition="A company's ability to pay its debts and keep operating without going bankrupt.">
            solvent
          </Term>
          . That's why layoffs, sudden{" "}
          <Term definition="A deliberate change in a company's strategy, product, or market when the original plan isn't working.">
            pivots
          </Term>
          , and shutting down whole projects don't really count as "wrong" inside this mindset. They
          count as whatever keeps the lights on.
        </p>
      </Section>

      <Section title="2. Be a lion and a fox.">
        <p>
          Machiavelli says a leader has to be both a{" "}
          <Term definition="Machiavelli's image of the leader who relies on raw strength and intimidation to scare off threats — powerful but easily trapped.">
            lion
          </Term>{" "}
          (strong enough to scare off wolves) and a{" "}
          <Term definition="Machiavelli's image of the leader who relies on cunning, deception, and pattern-recognition to spot traps — clever but unable to fight off real predators alone.">
            fox
          </Term>{" "}
          (smart enough to see traps coming). A modern CEO basically does both every single week. The
          lion shows up in the big company-wide speech or the magazine interview. The fox shows up in
          the quiet meetings where lawyers are in the room and an{" "}
          <Term definition="When one company buys another and absorbs its assets, employees, or product line.">
            acquisition
          </Term>{" "}
          is being timed just right.
        </p>
      </Section>

      <Section title="3. Should people fear you or love you?">
        <p>
          This is Machiavelli's most famous question. His real answer is that both is the dream. But
          if you can only pick one, go with fear. The reasoning is kind of cold but it makes sense.
          Love is something other people give you, which means they can also take it away. Fear is
          something you actually control. Loyalty based on good feelings disappears the second things
          get rough. Loyalty backed up by real consequences sticks around.
        </p>
        <p>
          You see this in companies all the time. The ones that try to run purely on "we're a family"
          energy usually fall apart at the first bad quarter. The ones that mix being a decent
          workplace with stuff like{" "}
          <Term definition="A schedule that gives employees ownership of company stock gradually over time, so they only fully earn it if they stay long enough.">
            equity vesting
          </Term>
          ,{" "}
          <Term definition="A clause in an employment contract that bars a worker from joining a competitor for a set period after leaving.">
            non-competes
          </Term>
          , and actual performance reviews tend to hold together longer.
        </p>
      </Section>

      <Section title="4. Look the part, even if you're not.">
        <p>
          Machiavelli doesn't sugarcoat it. A prince has to <em>look</em> kind, honest, and good,
          even when what he's actually doing is the opposite. Modern CEOs are doing the exact same
          thing. The transparency reports, the mission statements about "doing the right thing," the
          carefully scripted town halls? That's just the same Renaissance move with an HR team
          attached. Honestly, the most{" "}
          <Term definition="Describes behavior that is cunning, manipulative, and willing to use deception or harsh tactics to gain or keep power — named after Niccolò Machiavelli.">
            Machiavellian
          </Term>{" "}
          thing a CEO can pull off today is looking like the kind of person who would never do
          anything Machiavellian.
        </p>
      </Section>

      <Pullquote>
        Modern business preaches openness. The Prince teaches how to perform it.
      </Pullquote>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/sun-tzu" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
          ← Back to the East: Sun Tzu
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
