import Link from "next/link";

const SHOP_LINKS = [
  { href: "/knifelist", label: "All Knives" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const INFO_LINKS = [
  { href: "/shipping", label: "Shipping" },
  { href: "https://www.instagram.com/objectiveresourcegroup/", label: "Instagram" },
  { href: "mailto:Info@objectiveresourcegroup.com", label: "Email Us" },
];

export default function Footer() {
  return (
    <footer className="hairline bg-black">
      <div className="mx-auto max-w-shell px-4 py-14 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="display block text-[17px] text-white transition-opacity hover:opacity-70 sm:text-[19px]"
        >
          Objective Resource Group
        </Link>

        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="ui-sm mb-4 text-muted">Shop</p>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="ui link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ui-sm mb-4 text-muted">Info</p>
            <ul className="space-y-2.5">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="ui link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="ui-sm mb-4 text-muted">Studio</p>
            <p className="ui text-foreground">
              Custom knives
              <br />
              Built for purpose
              <br />
              Veteran owned
              <br />
              Made in New Zealand
            </p>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="ui-sm text-muted">
            &copy; {new Date().getFullYear()} Objective Resource Group
          </p>
          <p className="ui-sm text-muted">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
