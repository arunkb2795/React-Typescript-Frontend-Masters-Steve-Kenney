import { Dispatch } from 'react';
import ColorPicker from './ColourPicker';
type ColorPalette = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};
export default function ColorPalette({ hexColor, dispatch }: ColorPalette) {
  return (
    <div>
      <p>Color Palette</p>
      <ColorPicker hexColor={hexColor} dispatch={dispatch} />
      <div className={`w-20 h-20`} style={{ backgroundColor: hexColor }}></div>
    </div>
  );
}
