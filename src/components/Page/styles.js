import styled from 'styled-components';
import { flexcc, flex, Colors } from '../../global/tools';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flex('center', 'center', 'column')}
`;

const Button = styled.button`
  border: none;
  padding: 20px 40px;
  outline: none;
  background-color: ${Colors.mainBlue};
  color: ${Colors.mainWhite};
`;

const Title = styled.h1`
  color: ${Colors.mainBlack};
`;

const TitleContainer = styled.header`
  ${flexcc}
  margin: 0 0 150px;
`;

const Image = styled.img`
  margin: 0 5px;
  width: 40px;
`;

export {
  Container,
  Button,
  Title,
  TitleContainer,
  Image,
};
