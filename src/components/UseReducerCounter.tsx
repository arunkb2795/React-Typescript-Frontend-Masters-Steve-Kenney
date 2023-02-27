import { useReducer } from 'react';

type InitialState = {
  count: number;
  draftCount: number;
};

type ActionTypes = {
  type: 'increment' | 'decrement' | 'reset' | 'updateCountFromDraft';
};

type ActionTypeWithPayload = {
  type: 'updateDraftCount';
  payload: number;
};

const initialState: InitialState = {
  count: 0,
  draftCount: 0,
};

const reducer = (
  state = initialState,
  action: ActionTypes | ActionTypeWithPayload
) => {
  const { count, draftCount } = state;
  switch (action.type) {
    case 'increment': {
      const newCount = count + 1;
      return { count: newCount, draftCount: newCount };
    }
    case 'decrement': {
      const newCount = count - 1;
      return { count: newCount, draftCount: newCount };
    }
    case 'reset': {
      return { count: 0, draftCount: 0 };
    }
    case 'updateDraftCount': {
      return { count, draftCount: action.payload };
    }
    case 'updateCountFromDraft': {
      return { count: Number(draftCount), draftCount };
    }
  }
  return state;
};

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2 className="font-medium">Counter with useReducer</h2>
      <p>{state.count}</p>
      <p>{state.draftCount}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'updateCountFromDraft' });
        }}
      >
        <input
          className="border-2 border-black"
          type="number"
          value={state.draftCount}
          onChange={(e) =>
            dispatch({
              type: 'updateDraftCount',
              payload: e.target.value,
            })
          }
        />
        <button type="submit">Update Counter</button>
      </form>
    </div>
  );
}
