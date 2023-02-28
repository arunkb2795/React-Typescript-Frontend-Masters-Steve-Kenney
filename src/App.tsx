import { useState } from 'react';
import './App.css';
import ColorPalette from './components/ColourPalette';

function App() {
  const [value, setValue] = useState('');
  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <ColorPalette />
    </>
  );
}

export default App;
