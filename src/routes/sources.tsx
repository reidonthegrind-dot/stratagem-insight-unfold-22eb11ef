import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Annotated Sources — Strategists & CEOs" },
      { name: "description", content: "MLA-cited annotated bibliography for the research exhibit on Sun Tzu and Machiavelli in modern business." },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Bibliography · MLA</p>
      <h1 className="mt-3 font-display text-5xl">Annotated Sources</h1>
      <p className="mt-4 text-muted-foreground">Three works ground this exhibit. Each entry includes a short summary and a personal reflection.</p>

      <ol className="mt-12 space-y-12">
        <Entry
          citation={<>Machiavelli, Niccolò. <em>The Prince</em>. Translated by W. K. Marriott, Simon & Schuster, 2018.</>}
          summary="The Prince is a direct, step-by-step guide focused on one goal: gaining and keeping power. Machiavelli says a leader's main job is to keep the state stable, and that this takes both smarts and strength. He says a leader has to act like a lion and a fox at the same time. He is best known for asking whether a leader should be feared or loved. His answer is that both is best, but if you have to pick, fear is safer because it keeps people loyal and stops rebellion."
          reflection="I used this source to understand the Western view of power. Modern business says it values openness, but reading The Prince showed me how today's CEOs can use that image of openness even when they are not really being open. It made me see how important image is in modern decisions."
        />
        <Entry
          citation={<>McNeilly, Mark R. <em>Sun Tzu and the Art of Business: Six Strategic Principles for Managers</em>. Revised ed., Oxford University Press, 2012.</>}
          summary="McNeilly turns The Art of War into six clear business strategies. He focuses on ideas like winning without fighting, where a company takes a market by inventing something new instead of cutting prices, and attacking weakness, where a company targets the gaps a rival has left open. He uses real cases like Apple and Microsoft to show how speed and a strong image lead to a real edge."
          reflection="This source changed how I think about strategy. Instead of seeing it as just being aggressive, I started seeing it as being patient and smart. McNeilly showed me that Sun Tzu's ideas still fit market entry today, where the goal is to make your rival's plan useless instead of beating them in a head-on fight. It connected the old text to the modern world. (Thanks, Gramps for helping me find this.)"
        />
        <Entry
          citation={<>Tzu, Sun. <em>The Art of War</em>. Translated by Samuel B. Griffith, Oxford University Press, 1963.</>}
          summary="A classic book on military strategy that focuses on being flexible, gathering good information, and reading the enemy's mindset. Sun Tzu argues that a leader should use trickery and a strong knowledge of the ground to outsmart enemies. The book has thirteen chapters, each focused on a different part of strategy."
          reflection="This source helped me see the mental side of war through Sun Tzu's ideas. It made the link clear for me: 'knowing the ground' in war is the same as a company knowing its market. You have to know who you are selling to (the ground) and who you are competing with. This source backs up my main point that the best product does not always win. A smart strategist can still win even when they look like the underdog."
        />
      </ol>
    </main>
  );
}

function Entry({ citation, summary, reflection }: { citation: React.ReactNode; summary: string; reflection: string }) {
  return (
    <li className="rounded-2xl border border-border bg-card p-8">
      <p className="font-display text-lg leading-snug">{citation}</p>
      <div className="mt-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Summary</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{summary}</p>
      </div>
      <div className="mt-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade">Reflection</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{reflection}</p>
      </div>
    </li>
  );
}
