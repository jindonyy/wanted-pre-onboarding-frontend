import styled, { css } from 'styled-components';

export type $ButtonProp = {
  size?: keyof typeof sizeStyle;
  color?: keyof typeof colorStyle;
};

const large = css<$ButtonProp>`
  min-width: 20rem;
  min-height: 4.6rem;
  border-radius: 2.3rem;
`;

const small = css<$ButtonProp>`
  min-width: 6.5rem;
  min-height: 3rem;
  border-radius: 2rem;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const sizeStyle = {
  large,
  small
};

const primary = {
  default: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.palette.primary.initial};
    color: ${({ theme }) => theme.color.white};
  `,
  hover: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.palette.primary.hover};
  `,
  disabled: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.palette.primary.disabled};
  `
};

const white = {
  default: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.palette.primary.initial};
    border: ${({ theme }) => `1px solid ${theme.palette.primary.initial}`};
  `,
  hover: css<$ButtonProp>`
    color: ${({ theme }) => theme.palette.primary.hover};
    border: ${({ theme }) => `1px solid ${theme.palette.primary.hover}`};
  `,
  disabled: css<$ButtonProp>`
    color: ${({ theme }) => theme.palette.primary.disabled};
    border: ${({ theme }) => `1px solid ${theme.palette.primary.disabled}`};
  `
};

const black = {
  default: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => `1px solid ${theme.color.white}`};
  `,
  hover: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.color.grey[500]};
  `,
  disabled: css<$ButtonProp>`
    background-color: ${({ theme }) => theme.color.grey[400]};
  `
};

const colorStyle = {
  primary,
  white,
  black
};

const $Button = styled.button<$ButtonProp>`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })};
  padding: 0 1.5rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  ${({ size = 'large' }) => sizeStyle[size]};
  ${({ color = 'primary' }) => colorStyle[color].default};
  :hover {
    ${({ color = 'primary' }) => colorStyle[color].hover};
  }
  :disabled {
    ${({ color = 'primary' }) => colorStyle[color].disabled};
  }
`;

export { $Button };
