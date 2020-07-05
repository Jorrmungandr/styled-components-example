import styled from 'styled-components';
import { Colors } from '../../global/tools';

const ModalBase = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.form`
  position: relative;
  width: 85%;
  max-width: 26.6rem;
  max-height: 40rem;
  margin: auto;
  padding: 0 2.6rem 2.6rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  overflow: auto;
  text-align: center;
`;

const FormInput = styled.input`
  padding: .6rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondaryWhite};

  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.secondaryBlue};

  outline-style: none;

  color: ${({ theme }) => theme.colors.secondaryBlue};

  margin: .6rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

const FormButton = styled.button`
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border: 1px solid ${({ theme }) => theme.colors.mainWhite};
  padding: .5rem 0;
  color: ${({ theme }) => theme.colors.mainWhite};
  margin-top: 2.6rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.mainBlack};
  margin: 20px 0;
`;

const colourStyles = {
  control: (base) => ({
    ...base,
    boxShadow: 'none',
    // border: `1px solid ${({ theme }) => theme.colors.mainBlack}`,
    cursor: 'pointer',
    borderRadius: '0rem',
    backgroundColor: Colors.secondaryWhite,
    margin: '1.3rem 0',
    '&:hover': {
      border: `1px solid ${({ theme }) => theme.colors.mainBlack}`,
    },
  }),
  option: (base, state) => ({
    ...base,
    color: Colors.mainBlack,
    backgroundColor: state.isSelected ? '#eee' : base.backgroundColor,
    cursor: 'pointer',
  }),
  indicatorSeparator: () => { },
  dropdownIndicator: (base) => ({ ...base, '& svg': { fill: Colors.mainBlack } }),
  singleValue: (base) => ({ ...base, color: Colors.mainBlack }),
  placeholder: (base) => ({ ...base, color: Colors.mainBlack }),
  menuList: (base) => ({
    ...base,
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: '7rem',
    overflow: 'auto',
  }),
  menu: (base) => ({
    ...base,
    marginTop: '0rem',
    borderRadius: '0rem',
  }),
};

export {
  ModalBase,
  ModalContent,
  FormInput,
  FormButton,
  Title,
  colourStyles,
};
