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
        h3
        css={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '20px',
          letterSpacing: '0.05px',
        }}
      >
        Hala terörist olma ihtimaliniz var.
        <br /> Henüz tam liste açıklanmadı, beklemedeyiz. 🔥🔥🔥
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
