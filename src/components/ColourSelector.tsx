import { Dispatch } from 'react';
import { hex } from 'color-convert';

type ColourSelectorProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

export default function ColourSelector({
  hexColor,
  dispatch,
}: ColourSelectorProps) {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const updateRGB = ({ red = r, green = g, blue = b }) => {
    console.log('hi');
    dispatch({
      type: 'update-rgb-color',
      payload: { rgb: [red, green, blue] },
    });
  };

  console.log({ color });
  return (
    <div>
      <p>Hi</p>
      <input
        className="border-2"
        type="number"
        value={r}
        onChange={(e) => updateRGB({ red: +e.target.value })}
      />
      <input
        className="border-2"
        type="number"
        value={g}
        onChange={(e) => updateRGB({ green: +e.target.value })}
      />
      <input
        className="border-2"
        type="number"
        value={b}
        onChange={(e) => updateRGB({ blue: +e.target.value })}
      />
    </div>
  );
}
