/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import { createContext } from 'react';
// expect an argument but got none
const ThemeContext = createContext(undefined);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
