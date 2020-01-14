/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */
type objects = {
  [field:string]:any
}

const options = {
  wordPattern: '[A-Za-z]*',
  delims: {
    modifier: '__',
    state: '.',
  },
};

function buildRegex(delims: objects, wordPattern:string) {
  const block = `(${wordPattern})`;
  const modifier = `(?:${delims.modifier}(${wordPattern}))?`;
  const state = `(?:${delims.state}(${wordPattern}))?`;
  return new RegExp(`^${block}${modifier}${state}$`);
}

function parse(str:string, regex:objects) {
  const executed = regex.exec(str);
  return executed ? executed.slice(1) : [];
}

function createParser(op:objects) {
  const regex = buildRegex(op.delims, op.wordPattern);
  return (str:string) => parse(str, regex);
}

// Should be configured by props.
export default createParser(options);
