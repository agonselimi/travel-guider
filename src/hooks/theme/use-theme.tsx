/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import { useContext } from "react";

// Internal dependencies
import ThemeContext from "./theme-context";

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
