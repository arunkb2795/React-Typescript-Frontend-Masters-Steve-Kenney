import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import colorReducer, { initialState } from '../lib/color-reducer';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#ff0044',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider
      value={{ hexColor: state.hexColor, dispatch: dispatch }}
    >
      {children}
    </ColorContext.Provider>
  );
};
