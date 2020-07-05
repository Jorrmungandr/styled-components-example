import styled, { css } from 'styled-components';

const Colors = {
  mainBlue: '#2B65F9',
  mainBlack: '#333333',
  mainGray: '#757575',
  secondaryWhite: '#E9F3F5',
  mainWhite: '#FFF',
};

const flexcc = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flex = (justify = 'unset', align = 'unset', direction = 'unset', wrap = 'unset') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

const FlexComponent = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'unset'};
  align-items: ${({ align }) => align || 'unset'};
  flex-direction: ${({ direction }) => direction || 'unset'};
  flex-wrap: ${({ wrap }) => wrap || 'unset'};
`;

export {
  Colors,
  flex,
  flexcc,
  FlexComponent,
};
