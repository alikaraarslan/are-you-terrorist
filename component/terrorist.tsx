/* eslint-disable @next/next/no-img-element */
import { Text } from '@nextui-org/react';
import { ResultWrapper } from './SumTerrorist';

type Props = {
  value: number;
};

const Terrorist: React.FC<Props> = ({ value }) => {
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
        Sen %{value.toFixed(0)} teröristsin. 🔥🔥🔥
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
