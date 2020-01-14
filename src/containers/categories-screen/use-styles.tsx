import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  flatList: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: 86,
    paddingLeft: 4,
    paddingRight: 4,
  },
  columnWrapperStyle: {
    height: 200,
  },

  button: {
    bottom: 0,
    left: 0,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    position: 'absolute',
    right: 0,
  },
});

export default styles;
