import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [draftCount, setDraftCount] = useState(count);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCount(draftCount);
        }}
      >
        <input
          className="border-2 border-black"
          type="number"
          value={draftCount}
          onChange={(e) => setDraftCount(e.target.valueAsNumber)}
        />
        <button type="submit">Update Counter</button>
      </form>
    </>
  );
}
