import {
  Cell,
  Column,
  Row as TR,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import type { Selection, SortDescriptor } from "react-aria-components";
import { useMemo, useState } from "react";
import "./Table.css";

export type TableRow = {
  id: string;
  pattern: string;
  library: string;
  role: string;
  released: string;
};

type Props = {
  rows: TableRow[];
  ariaLabel?: string;
  className?: string;
};

export function DataTable({
  rows,
  ariaLabel = "Pattern catalogue",
  className = "tbl",
}: Props) {
  const [sort, setSort] = useState<SortDescriptor>({ column: "pattern", direction: "ascending" });
  const [keys, setKeys] = useState<Selection>(new Set());

  const sorted = useMemo(() => {
    const col = sort.column as keyof TableRow;
    const dir = sort.direction === "ascending" ? 1 : -1;
    return [...rows].sort((a, b) => (a[col] < b[col] ? -1 : a[col] > b[col] ? 1 : 0) * dir);
  }, [sort, rows]);

  return (
    <Table
      aria-label={ariaLabel}
      className={className}
      sortDescriptor={sort}
      onSortChange={setSort}
      selectionMode="multiple"
      selectedKeys={keys}
      onSelectionChange={setKeys}
    >
      <TableHeader>
        <Column id="pattern" isRowHeader allowsSorting className="tbl__th">
          Pattern
        </Column>
        <Column id="library" allowsSorting className="tbl__th">
          Library
        </Column>
        <Column id="role" allowsSorting className="tbl__th">
          Role
        </Column>
        <Column id="released" allowsSorting className="tbl__th">
          Released
        </Column>
      </TableHeader>
      <TableBody>
        {sorted.map((r) => (
          <TR key={r.id} id={r.id} className="tbl__tr">
            <Cell className="tbl__td tbl__td--name">{r.pattern}</Cell>
            <Cell className="tbl__td mono">{r.library}</Cell>
            <Cell className="tbl__td mono">{r.role}</Cell>
            <Cell className="tbl__td mono">{r.released}</Cell>
          </TR>
        ))}
      </TableBody>
    </Table>
  );
}
