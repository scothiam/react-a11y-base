import { Breadcrumb as Crumb, Breadcrumbs, Link } from "react-aria-components";
import "./Breadcrumb.css";

export type BreadcrumbItem = {
  id: string;
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
  navLabel?: string;
};

export function Breadcrumb({
  items,
  className = "bc",
  navLabel = "Breadcrumb",
}: Props) {
  return (
    <div className="bc__nav">
      <Breadcrumbs aria-label={navLabel} className={className}>
        {items.map((item, idx) => (
          <Crumb id={item.id} key={item.id} className="bc__item">
            {item.href ? (
              <Link href={item.href} className="bc__link">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="bc__current">
                {item.label}
              </span>
            )}
            {idx < items.length - 1 && (
              <span aria-hidden="true" className="bc__sep">
                /
              </span>
            )}
          </Crumb>
        ))}
      </Breadcrumbs>
    </div>
  );
}
