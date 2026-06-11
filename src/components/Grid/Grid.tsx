import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import "./Grid.css";

export type GridRow = {
  id: string;
  pattern: string;
  status: "draft" | "ready" | "shipped";
  spec: string;
  notes: string;
};

const helper = createColumnHelper<GridRow>();

type Props = {
  rows: GridRow[];
  ariaLabel?: string;
  className?: string;
};

export function Grid({
  rows,
  ariaLabel = "Pattern delivery status",
  className = "grd",
}: Props) {
  const columns = useMemo(
    () => [
      helper.accessor("pattern", { header: "Pattern" }),
      helper.accessor("status", { header: "Status" }),
      helper.accessor("spec", { header: "Spec" }),
      helper.accessor("notes", { header: "Notes" }),
    ],
    []
  );

  const data = useMemo(() => rows, [rows]);
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  const ref = useRef<HTMLTableElement | null>(null);
  const [focus, setFocus] = useState<{ r: number; c: number }>({ r: 0, c: 0 });

  useEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>(
      `[data-r="${focus.r}"][data-c="${focus.c}"]`
    );
    el?.focus();
  }, [focus]);

  const totalRows = table.getRowModel().rows.length;
  const totalCols = columns.length;

  function onKey(e: React.KeyboardEvent) {
    const { r, c } = focus;
    let nr = r;
    let nc = c;
    if (e.key === "ArrowRight") nc = Math.min(c + 1, totalCols - 1);
    else if (e.key === "ArrowLeft") nc = Math.max(c - 1, 0);
    else if (e.key === "ArrowDown") nr = Math.min(r + 1, totalRows);
    else if (e.key === "ArrowUp") nr = Math.max(r - 1, 0);
    else if (e.key === "Home") nc = 0;
    else if (e.key === "End") nc = totalCols - 1;
    else if (e.key === "PageDown") nr = totalRows;
    else if (e.key === "PageUp") nr = 0;
    else return;
    e.preventDefault();
    setFocus({ r: nr, c: nc });
  }

  return (
    <div
      className="grd__wrap"
      role="grid"
      aria-label={ariaLabel}
      aria-rowcount={totalRows + 1}
      aria-colcount={totalCols}
      onKeyDown={onKey}
    >
      <table className={className} ref={ref} role="presentation">
        <thead role="presentation">
          {table.getHeaderGroups().map((g) => (
            <tr key={g.id} role="row">
              {g.headers.map((h, ci) => (
                <th
                  key={h.id}
                  role="columnheader"
                  aria-rowindex={1}
                  aria-colindex={ci + 1}
                  data-r={0}
                  data-c={ci}
                  tabIndex={focus.r === 0 && focus.c === ci ? 0 : -1}
                >
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody role="presentation">
          {table.getRowModel().rows.map((row, ri) => (
            <tr key={row.id} role="row" aria-rowindex={ri + 2}>
              {row.getVisibleCells().map((cell, ci) => {
                const isHeader = ci === 0;
                const value = String(cell.getValue());
                const isStatus = cell.column.id === "status";
                return (
                  <td
                    key={cell.id}
                    role={isHeader ? "rowheader" : "gridcell"}
                    aria-colindex={ci + 1}
                    data-r={ri + 1}
                    data-c={ci}
                    tabIndex={focus.r === ri + 1 && focus.c === ci ? 0 : -1}
                  >
                    {isStatus ? (
                      <span className={`grd__chip grd__chip--${value}`}>
                        {value}
                      </span>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
