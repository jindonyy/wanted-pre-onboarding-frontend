import { css } from 'styled-components';

interface IFlex {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-end' | 'flex-start' | 'center';
}

type Position = 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';

interface ICoordinate {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const mixins = {
  flexBox: ({ direction, justify, align }: IFlex) => css`
    display: flex;
    ${direction && `flex-direction: ${direction}`};
    ${justify && `justify-content: ${justify}`};
    ${align && `align-items: ${align}`};
  `,

  position: (position: Position, { top, bottom, left, right }: ICoordinate) => css`
    position: ${position};
    ${top && `top: ${top}`};
    ${bottom && `bottom: ${bottom}`};
    ${left && `left: ${left}`};
    ${right && `right: ${right}`};
  `
};
