import { useReducer } from 'react';
import colorReducer, { initialState } from '../lib/color-reducer';
import ColorPicker from './ColourPicker';
export default function ColorPalette() {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <div>
      <p>Color Palette</p>
      <ColorPicker hexColor={state.hexColor} dispatch={dispatch} />
      <div
        className={`w-20 h-20`}
        style={{ backgroundColor: state.hexColor }}
      ></div>
    </div>
  );
}
