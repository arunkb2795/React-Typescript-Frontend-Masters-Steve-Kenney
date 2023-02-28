import { Dispatch } from 'react';

type ColorPickerProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};
export default function ColorPicker({ hexColor, dispatch }: ColorPickerProps) {
  return (
    <input
      type="color"
      value={hexColor}
      onChange={(e) =>
        dispatch({
          type: 'update-hex-color',
          payload: { hexColor: e.target.value },
        })
      }
    />
  );
}
