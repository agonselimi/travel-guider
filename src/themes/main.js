/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// prettier-ignore
// External dependencies

// Internal dependencies
const normalize = (size: number): number => size;

// Colors
//
//
export const black = '#000';
export const gray100 = '#f8f9fa';
export const gray200 = '#e9ecef';
export const gray300 = '#dee2e6';
export const gray400 = '#ced4da';
export const gray500 = '#adb5bd';
export const gray600 = '#6c757d';
export const gray700 = '#495057';
export const gray800 = '#343a40';
export const gray900 = '#212529';
export const white = '#fff';
export const primary = '#1273DE';
export const secondary = '#6c757d';

// Spacing
//
//
export const baseSpace = normalize(16);
export const exSmSpace = normalize(4);
export const smSpace = normalize(8);
export const lgSpace = normalize(32);
export const exLgSpace = normalize(64);

//  Typography
//
//
export const fontSizeBase = normalize(15);
export const fontSizeLg = normalize(15 * 1.25);
export const fontSizeSm = normalize(15 * 0.875);

export const lineHeightBase = normalize(15 * 1.5);
export const lineHeightLg = normalize(15 * 1.25 * 1.5);
export const lineHeightSm = normalize(15 * 0.875 * 1.5);

export const fontWeightLight = '300';
export const fontWeightNormal = '400';
export const fontWeightBold = '700';

// Component
//
//
export const componentPrimaryBackgroundColor = primary;
export const componentPrimaryBorderColor = primary;
export const componentPrimaryColor = white;

export const componentPrimaryDisabledBackgroundColor = primary;
export const componentPrimaryDisabledBorderColor = primary;
export const componentPrimaryDisabledColor = white;

export const componentPrimaryActiveBackgroundColor = primary;
export const componentPrimaryActiveBorderColor = primary;
export const componentPrimaryActiveColor = white;

export const componentSecondaryBackgroundColor = secondary;
export const componentSecondaryBorderColor = secondary;
export const componentSecondaryColor = white;

export const componentSecondaryDisabledBackgroundColor = secondary;
export const componentSecondaryDisabledBorderColor = secondary;
export const componentSecondaryDisabledColor = white;

export const componentSecondaryActiveBackgroundColor = secondary;
export const componentSecondaryActiveBorderColor = secondary;
export const componentSecondaryActiveColor = white;

// Avatar

export const avatarBodyBackgroundColor = '#00BDF9';

export const avatarBodySmSize = normalize(40);
export const avatarBodyMdSize = normalize(100);
export const avatarBodyLgSize = normalize(150);

export const avatarContainerSmSize = avatarBodySmSize + normalize(30);
export const avatarContainerMdSize = avatarBodyMdSize + normalize(30);
export const avatarContainerLgSize = avatarBodyLgSize + normalize(30);

export const avatarBodyCircleBorderRadius = normalize(100);
export const avatarBodyRoundedeBorderRadius = normalize(6);

export const avatarTextSmFontSize = normalize(13.3333);
export const avatarTextMdFontSize = normalize(33.3333);
export const avatarTextLgFontSize = normalize(50);

export const avatarTextColor = 'white';
export const avatarIconColor = 'white';

// Card

export const cardContainerMargin = normalize(exSmSpace);
export const cardImageBorderRadius = normalize(5);
export const cardOverlayPaddingLeft = normalize(baseSpace);
export const cardOverlayPaddingRight = normalize(baseSpace);

export const cardTextColor = '#fff';
export const cardBorderColor = '#fff';
export const cardTextBorderWidth = normalize(1);
export const cardTextFontSize = normalize(10);
export const cardBackgroundColor = 'rgba(255,255,255, .1)';
export const cardTextPadding = normalize(exSmSpace);
export const cardTextPaddingLeft = normalize(smSpace);
export const cardTextPaddingRight = normalize(smSpace);

// Field
export const fieldContainerHeight = normalize(70);
export const fieldTextFontSize = fontSizeBase;
export const fieldTextLineHeight = lineHeightBase;
export const fieldContainerBorderBottomWidth = normalize(1);
export const fieldContainerMarginLeft = normalize(baseSpace);
export const fieldContainerPaddingTop = normalize(0);
export const fieldContainerPaddingBottom = normalize(0);

export const fieldInputBorderBottomLeftRadius = normalize(0);
export const fieldInputBorderBottomRightRadius = normalize(0);
export const fieldInputBorderTopLeftRadius = normalize(0);
export const fieldInputBorderTopRightRadius = normalize(0);
export const fieldInputColor = '#495057';
export const fieldInputFontSize = normalize(16);
export const fieldInputLineHeight = normalize(1.5);
export const fieldInputMarginBottom = normalize(0);
export const fieldInputPaddingBottom = normalize(exSmSpace);

export const fieldBodyPaddingLeft = normalize(exSmSpace);
export const fieldBodyPaddingRight = normalize(exSmSpace);

export const fieldRightPaddingLeft = normalize(smSpace);
export const fieldRightPaddingRight = normalize(smSpace);

// List Item

export const listItemContainerBorderBottomWidth = normalize(1);
export const listItemContainerMarginLeft = normalize(baseSpace);
export const listItemContainerPaddingTop = normalize(baseSpace);
export const listItemContainerPaddingBottom = normalize(baseSpace);
export const listItemContainerBackgroundColor = 'white';

export const listItemContainerActiveBackgroundColor = '#209FFF';

export const listItemInputBorderBottomLeftRadius = normalize(0);
export const listItemInputBorderBottomRightRadius = normalize(0);
export const listItemInputBorderTopLeftRadius = normalize(0);
export const listItemInputBorderTopRightRadius = normalize(0);
export const listItemInputColor = '#495057';
export const listItemInputFontSize = normalize(fontSizeBase);
export const listItemInputMarginBottom = normalize(0);
export const listItemInputPadding = normalize(0);

export const listItemLeftPaddingLeft = normalize(smSpace);
export const listItemLeftPaddingRight = normalize(smSpace);

export const listItemBodyPaddingLeft = normalize(smSpace);
export const listItemBodyPaddingRight = normalize(smSpace);

export const listItemRightPaddingLeft = normalize(smSpace);
export const listItemRightPaddingRight = normalize(smSpace);

export const listItemTextFontSize = fontSizeBase;
export const listItemTextLineHeight = lineHeightBase;
export const listItemTextActiveColor = '#209FFF';

export const listItemTitleMarginRight = normalize(smSpace);
export const listItemTitleFontSieze = fontSizeBase;

export const listItemReviewFontSize = fontSizeSm;
export const listItemReviewPadding = normalize(exSmSpace / 2);

// Inputs
export const inputContainerHeight = normalize(50);
export const inputTextFontSize = fontSizeBase;
export const inputTextLineHeight = lineHeightBase;
export const inputContainerBorderBottomWidth = normalize(1);
export const inputContainerMarginLeft = normalize(smSpace);
export const inputContainerPaddingTop = normalize(baseSpace);
export const inputContainerPaddingBottom = normalize(baseSpace);
export const inputContainerBackgroundColor = 'white';
export const inputContainerBorderBottomColor = '#F2F2F6';

export const inputInputBorderBottomLeftRadius = normalize(0);
export const inputInputBorderBottomRightRadius = normalize(0);
export const inputInputBorderTopLeftRadius = normalize(0);
export const inputInputBorderTopRightRadius = normalize(0);
export const inputInputColor = '#495057';
export const inputInputFontSize = normalize(16);
export const inputInputLineHeight = normalize(1.5);
export const inputInputMarginBottom = normalize(0);
export const inputInputPadding = normalize(0);

export const inputLeftPaddingLeft = normalize(smSpace);
export const inputLeftPaddingRight = normalize(smSpace);
export const inputLeftWidth = normalize(30);

export const inputBodyPaddingLeft = normalize(smSpace);
export const inputBodyPaddingRight = normalize(smSpace);

export const inputRightPaddingLeft = normalize(baseSpace);
export const inputRightPaddingRight = normalize(baseSpace);

export const inputIconColor = '#209FFF';

export const inputTextColor = '#5B5B5B';
export const inputActiveTextColor = '#209FFF';

export const inputButtonBackgroundColor = '#209FFF';
export const inputButtonBorderRadius = normalize(100);
export const inputButtonSize = normalize(48);

export const inputTitleFontSize = fontSizeBase;
export const inputSubTitleFontSize = fontSizeSm;
export const inputPriceFontSize = fontSizeLg;
// Button
//
//
export const btnContainerBorderRadius = normalize(25);
export const btnContainerHeight = normalize(50);
export const btnContainerBorderWidth = normalize(2);

export const btnTextFontSize = fontSizeBase;
export const btnTextFontWeight = fontWeightNormal;
export const btnTextLineHeight = lineHeightBase;

export const btnIconFontSize = fontSizeBase;
export const btnIconLineHeight = lineHeightBase;
export const btnSubmitButtonMargin = normalize(lgSpace);

// Badge
//
//
export const badgeContainerBorderRadius = normalize(14);
export const badgeContainerHeight = normalize(28);
export const badgeContainerWidth = normalize(28);
export const badgeContainerPaddingY = normalize(0);
export const badgeContainerPaddingX = normalize(smSpace);
export const badgeBorderWidth = normalize(1);
export const badgeContainerPrimaryBackgroundColor = primary;

export const badgeTextFontSize = fontSizeSm;
export const badgeTextFontWeight = fontWeightBold;
export const badgeTextLineHeight = lineHeightSm;

// Checkbox
//
//
export const checkboxContainerBorderRadius = normalize(14);
export const chechboxContainerHeight = normalize(28);
export const checkboxContainerWidth = normalize(28);
export const checkboxBorderWidth = normalize(1);

export const checkboxIconFontSize = normalize(20);
export const checkboxIconFontWeight = fontWeightBold;
export const checkboxIconLineHeight = lineHeightSm;

export const tmpColor = 'white';

// Navbar
//
//
export const navbarContainerHeight = normalize(60);
export const navbarContainerTitleColor = gray700;
export const navbarContainerTitleFontSize = fontSizeLg;
export const navbarContainerTitleFontWeight = fontWeightNormal;
export const navbarContainerTitlePaddingY = normalize(smSpace);
export const navbarContainerBackgroundColor = '#FEFEFE';

export const navbarContainerSubtitleColor = gray600;
export const navbarContainerSubtitleFontSize = fontSizeSm;
export const navbarContainerSubtitlePaddingY = normalize(smSpace);

export const navbarContainerLeftHeight = normalize(60);
export const navbarContainerButtonHeight = normalize(60);
export const navbarContainerButtonPaddingX = normalize(smSpace);
export const navbarContainerButtonTextColor = gray600;
export const navbarContainerButtonFontSize = fontSizeBase;
export const navbarContainerButtonFontWeight = fontWeightNormal;

export const navbarContainerRightHeight = normalize(60);
export const navbarContainerBadgeBorderRadius = normalize(14);
export const navbarContainerBadgeBorderWidth = normalize(1);
export const navbarContainerBadgeHeight = normalize(28);
export const navbarContainerBadgeMarginY = normalize(smSpace);
export const navbarContainerBadgePaddingY = normalize(0);
export const navbarContainerBadgePaddingX = normalize(smSpace);

export const navbarContainerBadgeTextColor = white;
export const navbarContainerBadgeTextFontSize = fontSizeSm;
export const navbarContainerBadgeTextFontWeight = fontWeightBold;
export const navbarContainerBadgeTextHeight = lineHeightSm;

// Review
//
//
export const reviewIconColor = '#C0C2D3';
export const reviewIconFontSize = normalize(12);
export const reviewIconTextContainerPaddingX = normalize(6);
export const reviewTextColor = '#C0C2D3';
export const reviewTextFontSize = normalize(12);

// SearchBar
//
//
export const searchBarBodyBackgroundColor = '#F1F5FA';
export const searchBarBodyBoderRadius = normalize(4);
export const searchBarBodyBoderColor = 'transparent';
export const searchBarBodyBoderWidth = normalize(0.5);
export const searchBarContainerBackgroundColor = 'transparent';
export const searchBarContainerHeight = normalize(35);

export const searchBarIconFontSize = normalize(12);
export const searchBarIconWrapperPaddingX = normalize(5);
export const searchBarSearchFontSize = 12;
