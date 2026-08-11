import Link from "next/link";
import PageShell from "@/components/pageshell";

export default function NotFound() {
  return (
    <PageShell
      eyebrow="Error 404"
      title={"Not\nFound"}
      intro="That page does not exist, or the piece has been taken down."
    >
      <div className="flex flex-wrap gap-4">
        <Link href="/knifelist" className="btn">
          View the Collection &raquo;
        </Link>
        <Link href="/" className="btn-ghost">
          Back Home
        </Link>
      </div>
    </PageShell>
  );
}
