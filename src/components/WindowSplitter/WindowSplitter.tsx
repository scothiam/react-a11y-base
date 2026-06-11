import { Panel, Group, Separator } from "react-resizable-panels";
import "./WindowSplitter.css";

type Props = {
  className?: string;
};

export function WindowSplitter({ className = "ws" }: Props) {
  return (
    <div className={className}>
      <Group orientation="horizontal" className="ws__group" id="outer">
        <Panel defaultSize="30%" minSize="15%" className="ws__pane">
          <header className="ws__head">
            <span className="mono">left · outline</span>
          </header>
          <ul className="ws__list">
            <li>Front matter</li>
            <li>Vol. 01 — Form Controls</li>
            <li>Vol. 02 — Composite</li>
            <li>Vol. 03 — Layout</li>
            <li>Colophon</li>
          </ul>
        </Panel>

        <Separator className="ws__handle ws__handle--h">
          <span className="ws__grip" aria-hidden="true" />
        </Separator>

        <Panel className="ws__pane ws__pane--main">
          <Group orientation="vertical" id="inner">
            <Panel defaultSize="65%" className="ws__pane">
              <header className="ws__head">
                <span className="mono">top · editor</span>
              </header>
              <pre className="ws__code">{`<Tree>
  <Branch label="Vol. 01">
    <Leaf>Accordion</Leaf>
    <Leaf>Checkbox</Leaf>
  </Branch>
</Tree>`}</pre>
            </Panel>

            <Separator className="ws__handle ws__handle--v">
              <span className="ws__grip ws__grip--v" aria-hidden="true" />
            </Separator>

            <Panel defaultSize="35%" className="ws__pane">
              <header className="ws__head">
                <span className="mono">bottom · console</span>
              </header>
              <p className="ws__console">
                Drag the handles, or focus them with <kbd>Tab</kbd> and press
                the arrow keys to resize the panes precisely.
              </p>
            </Panel>
          </Group>
        </Panel>
      </Group>
    </div>
  );
}
