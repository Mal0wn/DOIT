/* Creating a context object that can be used to pass data through the component tree without having to
pass props down manually at every level. */
import {createContext} from 'react';
// Context use to stock the token
export const TokenContext = createContext();
