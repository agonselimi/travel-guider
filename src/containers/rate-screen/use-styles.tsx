/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// Internal dependencies
import { makeStyles } from '../../hooks/styles';

const styles = () => ({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  imageWrapper: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 200
  },
  image: {
    height: "100%",
    resizeMode: 'cover',
    width: "100%",
  },
  price: {
    backgroundColor: 'white',
    bottom: 50,
    fontSize: 15,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    position: 'absolute',
    right: 0,
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 20,
  },
  icon: {
    fontSize: 30,
  },
  textInput: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 0.5,
    height: 100,
    width: 320,
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  transparentButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'silver',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'silver',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default makeStyles(styles);
