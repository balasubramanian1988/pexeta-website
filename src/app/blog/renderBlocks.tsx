// Renders BlogBlock[] with inline **bold**, *italic* and [text](url) support.
import Link from "next/link";
import React from "react";
import type { BlogBlock } from "@/lib/blog/types";

function inline(text: string, key: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  const pushText = (s: string) => {
    for (const part of s.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)) {
      if (part.startsWith("**")) out.push(<strong key={`${key}-${i++}`} className="font-semibold text-slate-950">{part.slice(2, -2)}</strong>);
      else if (part.startsWith("*") && part.length > 2) out.push(<em key={`${key}-${i++}`}>{part.slice(1, -1)}</em>);
      else out.push(<React.Fragment key={`${key}-${i++}`}>{part}</React.Fragment>);
    }
  };
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) pushText(text.slice(last, m.index));
    const href = m[2];
    out.push(
      href.startsWith("http") ? (
        <a key={`${key}-${i++}`} href={href} target="_blank" rel="noopener" className="font-medium text-blue underline underline-offset-2">{m[1]}</a>
      ) : (
        <Link key={`${key}-${i++}`} href={href} className="font-medium text-blue underline underline-offset-2">{m[1]}</Link>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushText(text.slice(last));
  return out;
}

export default function RenderBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((b, n) => {
        const k = `b${n}`;
        switch (b.kind) {
          case "p":
            return <p key={k} className="mt-5 leading-relaxed text-slate-800">{inline(b.text, k)}</p>;
          case "h2":
            return <h2 key={k} className="mt-12 font-heading text-2xl font-bold text-slate-950">{b.text}</h2>;
          case "h3":
            return <h3 key={k} className="mt-8 font-heading text-lg font-bold text-slate-950">{b.text}</h3>;
          case "quote":
            return <div key={k} className="mt-6 rounded-lg border border-amber/40 bg-amber/10 px-5 py-4 leading-relaxed text-slate-900">{inline(b.text, k)}</div>;
          case "ul":
            return <ul key={k} className="mt-5 list-disc space-y-2 pl-6 text-slate-800">{b.items.map((it, j) => <li key={j} className="leading-relaxed">{inline(it, `${k}-${j}`)}</li>)}</ul>;
          case "ol":
            return <ol key={k} className="mt-5 list-decimal space-y-2 pl-6 text-slate-800">{b.items.map((it, j) => <li key={j} className="leading-relaxed">{inline(it, `${k}-${j}`)}</li>)}</ol>;
          case "table":
            return (
              <div key={k} className="mt-6 overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>{b.headers.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-border odd:bg-white even:bg-ice">
                        {r.map((c, x) => <td key={x} className="px-4 py-3 align-top text-slate-800">{inline(c, `${k}-${j}-${x}`)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faq":
            return (
              <section key={k} className="mt-14 rounded-2xl border border-amber/40 border-t-4 border-t-amber bg-amber/5 px-5 pb-2 pt-6 sm:px-7">
                <h2 id="faqs" className="font-heading text-2xl font-bold text-slate-950">Frequently asked questions</h2>
                <div className="mt-4 divide-y divide-border">
                  {b.items.map((f) => (
                    <details key={f.q} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-slate-950">
                        {f.q}
                        <span className="text-xl leading-none text-amber transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            );
          case "sources":
            return (
              <section key={k} id="sources" className="mt-8 rounded-2xl border border-border border-l-4 border-l-slate-950 bg-white px-5 py-5 sm:px-7">
                <h2 className="font-heading text-xl font-bold text-slate-950">Sources</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                  {b.items.map((src, j) => (
                    <li key={j} className="leading-relaxed">
                      <a href={src.url} target="_blank" rel="noopener nofollow" className="font-semibold text-slate-950 underline underline-offset-2 hover:text-amber">{src.title}</a>
                      {src.note && <span className="text-slate-500"> — {src.note}</span>}
                    </li>
                  ))}
                </ol>
              </section>
            );
        }
      })}
    </>
  );
}
