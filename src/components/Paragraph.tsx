import React from 'react';
import { Text as RNText } from 'react-native';

interface Props {
  children?: string | JSX.Element;
  multiLine?: boolean;
  style?: object;
  numberOfLines?: number;
}
function Paragraph(props: Props) {
    return <RNText multiLine {...props} />;
}

export default Paragraph;
