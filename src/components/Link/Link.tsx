import { Link as RALink } from "react-aria-components";
import "./Link.css";

export type LinkItem = {
  id: string;
  href: string;
  label: string;
  external?: boolean;
  disabled?: boolean;
};

type Props = {
  items: LinkItem[];
  lede?: string;
  quote?: string;
  className?: string;
};

export function Link({
  items,
  lede = "Links inside running prose should sit unmistakeably apart from the surrounding type — colour alone is not enough, so we lean on weight and a hairline underline.",
  quote = "“The link is the founding metaphor of the web. Treat it with the dignity it’s owed.”",
  className = "lnk",
}: Props) {
  return (
    <div className={className}>
      <p className="lnk__lede">{lede}</p>

      <ul className="lnk__list">
        {items.map((item) => (
          <li key={item.id}>
            <RALink
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              isDisabled={item.disabled}
              className={`lnk__a${item.disabled ? " lnk__a--disabled" : ""}`}
            >
              {item.label}
              {item.external && (
                <span aria-hidden="true" className="lnk__ext">↗</span>
              )}
            </RALink>
          </li>
        ))}
      </ul>

      <p className="lnk__quote">{quote}</p>
    </div>
  );
}
