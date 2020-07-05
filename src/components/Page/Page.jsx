import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Button,
  Title,
  Image,
} from './styles';
import Modal from '../Modal';
import { FlexComponent } from '../../global/tools';

import styledLogo from './assets/styled-components.jpeg';

function Page() {
  const [showModal, setShowModal] = useState(false);

  const { colors, setColors } = useContext(ThemeContext);

  const handleClick = () => {
    setColors({
      ...colors,
      mainWhite: colors.mainBlack,
      mainBlack: colors.mainWhite,
    });
  };

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [option, setOption] = useState({});

  const handleSubmit = () => {
    console.log(name, price, option);
  };

  return (
    <Container>
      <FlexComponent justify="center" align="center" as="header">
        <Image src={styledLogo} />
        <Title>Styled Components</Title>
      </FlexComponent>
      <Button type="button" onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      <Button type="button" onClick={handleClick}>
        Darkmode
      </Button>
      <Modal handleSubmit={handleSubmit} active={showModal} setActive={setShowModal}>
        <Modal.Title>Criar Item</Modal.Title>
        <Modal.Input value={name} setValue={setName} placeholder="Nome do Item" />
        <Modal.Input value={price} setValue={setPrice} placeholder="Preço" />
        <Modal.Select
          value={option}
          setValue={setOption}
          placeholder="Opção de Pagamento"
          options={[
            { label: 'Cartão', value: 'aaa' },
            { label: 'Depósito', value: 'aaa' },
            { label: 'Boleto', value: 'aaa' },
          ]}
        />
        <Modal.Button>Criar</Modal.Button>
      </Modal>
    </Container>
  );
}

export default Page;
