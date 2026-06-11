import {
  NumberField,
  Label,
  Group,
  Input,
  Button,
} from "react-aria-components";
import { useState } from "react";
import "./Spinbutton.css";

type Props = {
  className?: string;
};

export function Spinbutton({ className = "spn" }: Props) {
  const [copies, setCopies] = useState(50);
  const [points, setPoints] = useState(12);

  return (
    <div className={className}>
      <NumberField
        value={copies}
        onChange={setCopies}
        minValue={1}
        maxValue={500}
        step={1}
        className="spn__root"
      >
        <Label className="mono spn__label">Copies (1 – 500)</Label>
        <Group className="spn__group">
          <Button slot="decrement" className="spn__btn" aria-label="Decrease">
            −
          </Button>
          <Input className="spn__input" />
          <Button slot="increment" className="spn__btn" aria-label="Increase">
            +
          </Button>
        </Group>
      </NumberField>

      <NumberField
        value={points}
        onChange={setPoints}
        minValue={6}
        maxValue={144}
        step={0.5}
        formatOptions={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
        className="spn__root"
      >
        <Label className="mono spn__label">Type size (6 – 144 pt, half steps)</Label>
        <Group className="spn__group">
          <Button slot="decrement" className="spn__btn" aria-label="Decrease">
            −
          </Button>
          <Input className="spn__input" />
          <Button slot="increment" className="spn__btn" aria-label="Increase">
            +
          </Button>
        </Group>
      </NumberField>

      <p
        className="spn__sample"
        style={{ fontSize: `${Math.max(points, 6)}pt` }}
      >
        Hamburgefonstiv
      </p>
    </div>
  );
}
