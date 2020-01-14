/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { transform, reduce, every } from "lodash";

// Internal dependencies
import { useTheme } from "../theme";
import themes from "../../themes";
import parse from "./parse";

type Objects = {
  [field: string]: any
}

function makeStyles(componentStyles:Function) {
  const allStyles = {};
  const transformedStyles = {};

  Object.keys(themes).forEach(themeName => {
    const theme = themes[themeName];
    const styles = componentStyles(theme);
    allStyles[themeName] = StyleSheet.create(styles);
  });

  Object.keys(themes).forEach(themeName => {
    // const theme = themes[themeName];
    transformedStyles[themeName] = transform(
      allStyles[themeName],
      (res, styleId, selector) => {
        const result = res;
        const [block, modifier, state] = parse(selector);
        result[selector] = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state }
        );
        return result;
      },
      {}
    );
  });

  const useStyles = (props = {}) => {
    const { theme } = useTheme();
    const [groupedStyles, setGroupedStyles] = useState(() =>
      reduce(
        transformedStyles[theme],
        (res, value) => {
          const result = res;
          const { block, styleId, ...requredProps } = value;
          const propIsTrue = propKey => props[propKey] === true;
          const hasRequredProps = every(requredProps, propIsTrue);

          if (!hasRequredProps) {
            return result;
          }

          if (!result[block]) {
            result[block] = [];
          }

          result[block].push(styleId);
          return result;
        },
        {}
      )
    );
    useEffect(
      () => {
        const groupedStyles2 = reduce(
          transformedStyles[theme],
          (res, value) => {
            const result = res;
            const { block, styleId, ...requredProps } = value;
            const propIsTrue = propKey => props[propKey] === true;
            const hasRequredProps = every(requredProps, propIsTrue);

            if (!hasRequredProps) {
              return result;
            }

            if (!result[block]) {
              result[block] = [];
            }

            result[block].push(styleId);
            return result;
          },
          {}
        );
        setGroupedStyles(groupedStyles2);
      },
      [props.active]
    );

    return [groupedStyles, themes[theme]];
  };

  return useStyles;
}

export default makeStyles;
