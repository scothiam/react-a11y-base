import { Tree } from "react-arborist";
import type { NodeApi, NodeRendererProps } from "react-arborist";
import { useMemo } from "react";
import "./TreeView.css";

export type TreeViewNode = {
  id: string;
  name: string;
  kind?: "folder" | "file";
  children?: TreeViewNode[];
};

function Row({ node, style, dragHandle }: NodeRendererProps<TreeViewNode>) {
  const isLeaf = node.isLeaf;
  return (
    <div
      ref={dragHandle}
      className="tv__row"
      style={style}
      data-selected={node.isSelected}
      data-focused={node.isFocused}
    >
      <span
        className="tv__chev"
        aria-hidden="true"
        onClick={(e) => {
          e.stopPropagation();
          node.toggle();
        }}
      >
        {isLeaf ? "·" : node.isOpen ? "▾" : "▸"}
      </span>
      <span className="tv__icon mono" aria-hidden="true">
        {isLeaf ? "txt" : "dir"}
      </span>
      <span className="tv__name">{node.data.name}</span>
    </div>
  );
}

type Props = {
  data: TreeViewNode[];
  height?: number;
  onFocusChange?: (name: string | null) => void;
  className?: string;
};

export function TreeView({
  data,
  height = 340,
  onFocusChange,
  className = "tv__frame",
}: Props) {
  const treeData = useMemo(() => data, [data]);

  return (
    <div className={className}>
      <Tree<TreeViewNode>
        data={treeData}
        openByDefault={false}
        width="100%"
        height={height}
        indent={20}
        rowHeight={30}
        onFocus={(n: NodeApi<TreeViewNode> | null) =>
          onFocusChange?.(n?.data.name ?? null)
        }
      >
        {Row}
      </Tree>
    </div>
  );
}
