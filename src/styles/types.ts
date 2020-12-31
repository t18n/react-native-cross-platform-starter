/**
 * Flex
 */
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
export type AlignItem = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';

/**
 * Text
 */
export type TextType = 'H1' | 'H2' | 'H3' | 'Body';
export type FontStyle = 'normal' | 'italic';
export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter';
export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

/**
 * Size
 */
export type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';

/**
 * Theme
 */
export type PaletteName = 'dark' | 'light';

export type ThemePalette = {
  paletteName: PaletteName;
  palette: {
    background: string,
    onBackground: string,
    onBackgroundTint: string,
  };
}