interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  wide?: boolean;
}

/** Shared editorial layout for the text pages: big display title over a hairline rule. */
export default function PageShell({ eyebrow, title, intro, children, wide }: PageShellProps) {
  return (
    <div className="pt-[var(--header-h)]">
      <header className="mx-auto max-w-shell px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-24">
        {eyebrow && <p className="ui-sm mb-6 text-muted">{eyebrow}</p>}
        <h1 className="display whitespace-pre-line text-[13vw] leading-[0.85] text-white sm:text-[7vw]">
          {title}
        </h1>
        {intro && <p className="ui mt-8 max-w-xl normal-case tracking-normal text-muted">{intro}</p>}
      </header>

      <div className="hairline">
        <div className="mx-auto max-w-shell px-4 py-14 sm:px-6 sm:py-20">
          <div className={wide ? "" : "max-w-3xl"}>{children}</div>
        </div>
      </div>
    </div>
  );
}
