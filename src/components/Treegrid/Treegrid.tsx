import { Tree } from "react-arborist";
import type { NodeRendererProps } from "react-arborist";
import { useMemo } from "react";
import "./Treegrid.css";

export type TreegridRow = {
  id: string;
  name: string;
  owner: string;
  size: string;
  modified: string;
  children?: TreegridRow[];
};

function RowNode({ node, style }: NodeRendererProps<TreegridRow>) {
  const isLeaf = node.isLeaf;
  const data = node.data;
  const indent = (node.level + 1) * 16;
  return (
    <div
      role="row"
      aria-level={node.level + 1}
      aria-posinset={node.childIndex + 1}
      aria-setsize={node.parent?.children?.length ?? 1}
      aria-expanded={!isLeaf ? node.isOpen : undefined}
      aria-selected={node.isSelected}
      className="trg__row"
      data-focused={node.isFocused}
      style={style}
      onClick={() => (isLeaf ? node.select() : node.toggle())}
    >
      <div role="gridcell" className="trg__cell trg__cell--name" style={{ paddingLeft: indent }}>
        <span className="trg__chev" aria-hidden="true">
          {isLeaf ? "·" : node.isOpen ? "▾" : "▸"}
        </span>
        <span className={isLeaf ? "trg__file" : "trg__folder"}>{data.name}</span>
      </div>
      <div role="gridcell" className="trg__cell mono">{data.owner}</div>
      <div role="gridcell" className="trg__cell mono">{data.size}</div>
      <div role="gridcell" className="trg__cell mono">{data.modified}</div>
    </div>
  );
}

type Props = {
  data: TreegridRow[];
  ariaLabel?: string;
  height?: number;
  openByDefault?: boolean;
  className?: string;
};

export function Treegrid({
  data,
  ariaLabel = "Project files",
  height = 340,
  openByDefault = true,
  className = "trg",
}: Props) {
  const treeData = useMemo(() => data, [data]);

  return (
    <div
      role="treegrid"
      aria-label={ariaLabel}
      aria-rowcount={-1}
      aria-colcount={4}
      className={className}
    >
      <div role="row" className="trg__row trg__row--head">
        <span role="columnheader" className="trg__cell mono">name</span>
        <span role="columnheader" className="trg__cell mono">owner</span>
        <span role="columnheader" className="trg__cell mono">size</span>
        <span role="columnheader" className="trg__cell mono">modified</span>
      </div>
      <Tree<TreegridRow>
        data={treeData}
        openByDefault={openByDefault}
        width="100%"
        height={height}
        indent={0}
        rowHeight={30}
      >
        {RowNode}
      </Tree>
    </div>
  );
}
