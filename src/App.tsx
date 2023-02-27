import { useState } from 'react';
import './App.css';
import NameBadge from './components/NameBadge';
import Controls from './components/Controls';
import Application from './components/Application';
import Counter from './components/Counter';
import FetchAPI from './components/FetchAPI';
import UseReducerCounter from './components/UseReducerCounter';

function App() {
  const [value, setValue] = useState('');
  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <NameBadge name={value} greeting={'Welcome'} />
      <Controls
        name={value}
        onChange={(event) => setValue(event.target.value)}
        onSubmit={onSubmit}
      />
      <Application />
      <Counter />
      <UseReducerCounter />
      <FetchAPI />
    </>
  );
}

export default App;
