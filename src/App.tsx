import { useContext } from 'react';

import './App.css';
import ColorPalette from './components/ColourPalette';
import ColourSelector from './components/ColourSelector';
import { ColorContext } from './context/context';

function App() {
  const { hexColor, dispatch } = useContext(ColorContext);

  return (
    <>
      <ColorPalette hexColor={hexColor} dispatch={dispatch} />
      <ColourSelector hexColor={hexColor} dispatch={dispatch} />
    </>
  );
}

export default App;
