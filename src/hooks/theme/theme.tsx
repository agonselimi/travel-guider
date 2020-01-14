/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import React, { useState } from "react";

// Internal dependencies
import ThemeProvider from "./theme-provider";

type Props = { themes?: Object, theme?: Object, children?: any };

function Theme(props: Props) {
  const { themes, children, theme = "main" } = props;
  const [value] = useState(() => ({
    theme,
    setTheme: () => {},
    themes
  }));

  return <ThemeProvider value={value}>{children}</ThemeProvider>;
}

export default Theme;
