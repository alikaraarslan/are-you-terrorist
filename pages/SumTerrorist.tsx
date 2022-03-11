/* eslint-disable @next/next/no-img-element */
import { Text } from '@nextui-org/react';
import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SumTerrorist = () => {
  return (
    <ResultWrapper>
      <Text
        h2
        css={{
          textAlign: 'center',
          color: 'white',
          letterSpacing: '-0.02em',
          mx: 'auto',
          mb: '20px',
        }}
      >
        Hala terörist olma ihtimaliniz var.
        <br /> Henüz tam liste açıklanmadı, beklemedeyiz. 😎😎😎
      </Text>
      <img
        alt="list "
        src="/list-amazinggrace.gif"
        style={{ borderRadius: '10px' }}
      />
    </ResultWrapper>
  );
};

export default SumTerrorist;
