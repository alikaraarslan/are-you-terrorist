/* eslint-disable @next/next/no-img-element */
import { Text } from '@nextui-org/react';
import { ResultWrapper } from './SumTerrorist';

const Terrorist = () => {
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
        Sen bir teröristsin. 😎😎😎
      </Text>
      <img
        alt="terrorist"
        src="/terrorist-dance.gif"
        style={{ borderRadius: '10px' }}
      />
    </ResultWrapper>
  );
};

export default Terrorist;
