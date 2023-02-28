import { useReducer } from 'react';
import colorReducer, { initialState } from '../lib/color-reducer';
export default function ColorPalette() {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <div>
      <p>Color Palette</p>
      <input
        type="color"
        value={state.hexColor}
        onChange={(e) =>
          dispatch({
            type: 'update-hex-color',
            payload: { hexColor: e.target.value },
          })
        }
      />
      <div
        className={`w-20 h-20`}
        style={{ backgroundColor: state.hexColor }}
      ></div>
    </div>
  );
}
