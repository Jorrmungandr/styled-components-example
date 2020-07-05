import styled from 'styled-components';
import { flex } from '../../global/tools';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flex('center', 'center', 'column')}
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: ${({ border }) => (border && `${border} solid black`)};
`;

const Button = styled.button`
  border: none;
  padding: 20px 40px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.mainWhite};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.mainBlack};
`;

const Image = styled.img`
  margin: 0 5px;
  width: 40px;
`;

const Text = styled.p`
  color: ${({ black, theme }) => (black ? 'black' : theme.colors.mainBlue)};
  font-style: ${({ italic }) => italic && 'italic'};
  margin: .3rem 0;
  font-size: ${({ isTitle }) => (isTitle ? '1rem' : '.8rem')};
  width: 100%;
  opacity: ${({ opacity }) => opacity || 1};
  white-space: nowrap;

  @media only screen and (max-width: 750px) {
    font-size: ${({ isTitle }) => (isTitle ? '1rem' : '.8rem')};
  }
`;


const MainDiv = styled.div`
  ${({ flex }) => flex && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ${({
    position,
    top,
    left,
    right,
    bottom,
  }) => position && `
    position: absolute;
    top: ${top || 'auto'};
    left: ${left || 'auto'};
    right: ${right || 'auto'};
    bottom: ${bottom || 'auto'};
  `}
`;

export {
  Container,
  Button,
  Title,
  Image,
  Text,
  MainDiv,
};
