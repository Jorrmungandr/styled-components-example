const Colors = {
  mainBlue: '#2B65F9',
  mainBlack: '#333333',
  mainGray: '#757575',
  secondaryWhite: '#E9F3F5',
  mainWhite: '#FFF',
};

const flexcc = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flex = (justify, align, direction, wrap) => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export {
  Colors,
  flex,
  flexcc,
};