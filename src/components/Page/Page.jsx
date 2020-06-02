import React, { useState } from 'react';

import {
  Container,
  Button,
  Title,
  TitleContainer,
  Image,
} from './styles';
import Modal from '../Modal';

import styledLogo from './assets/styled-components.jpeg';

function Page() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [option, setOption] = useState({});

  const handleSubmit = () => {
    console.log(name, price, option);
  };

  return (
    <Container>
      <TitleContainer>
        <Image src={styledLogo} />
        <Title>Styled Components</Title>
      </TitleContainer>
      <Button onClick={() => setShowModal(true)}>
        Open Modal
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
