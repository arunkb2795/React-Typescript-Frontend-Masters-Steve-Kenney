import { useReducer } from 'react';

import './App.css';
import ColorPalette from './components/ColourPalette';
import ColourSelector from './components/ColourSelector';
import colorReducer, { initialState } from './lib/color-reducer';

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <>
      <ColorPalette hexColor={state.hexColor} dispatch={dispatch} />
      <ColourSelector hexColor={state.hexColor} dispatch={dispatch} />
    </>
  );
}

export default App;
