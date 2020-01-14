import { makeStyles } from './../../hooks/styles';

const styles = (theme: any) => ({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: theme.checkboxContainerBorderRadius,
    borderWidth: theme.checkboxBorderWidth,
    justifyContent: 'center',
    height: theme.chechboxContainerHeight,
    width: theme.checkboxContainerWidth,
  },
  icon: {
    fontSize: theme.checkboxIconFontSize,
    fontWeight: theme.checkboxIconFontWeight,
    textAlign: 'center',
  },
  container__primary: {
    backgroundColor: theme.componentPrimaryColor,
    borderColor: theme.componentPrimaryBorderColor,
  },
  icon__primary: {
    color: theme.componentPrimaryColor,
  },

  'container__primary.disabled': {
    backgroundColor: theme.componentPrimaryDisabledBackgroundColor,
    borderColor: theme.componentPrimaryDisabledBorderColor,
  },

  'container__primary.active': {
    backgroundColor: theme.componentPrimaryBackgroundColor,
    borderColor: theme.componentPrimaryBorderColor,
  },
  'icon__primary.active': {
    color: theme.componentPrimaryActiveColor,
  },
  container__secondary: {
    backgroundColor: theme.componentPrimaryColor,
    borderColor: theme.componentSecondaryBorderColor,
  },
  icon__secondary: {
    color: theme.componentSecondaryColor,
  },
  'container__secondary.disabled': {
    backgroundColor: theme.componentSecondaryDisabledBackgroundColor,
    borderColor: theme.componentSecondaryDisabledBorderColor,
  },
  'icon__secondary.disabled': {
    color: theme.componentSecondaryDisabledColor,
  },
  'container__secondary.active': {
    backgroundColor: theme.componentSecondaryBackgroundColor,
    borderColor: theme.componentSecondaryBorderColor,
  },
  'icon__secondary.active': {
    color: theme.componentSecondaryActiveColor,
  },
  container__image: {
    backgroundColor: 'white',
    borderColor: 'white',
    opacity: 0.65,
  },
  icon__image: {
    color: '#0092FF',
  },
});

export default makeStyles(styles);
