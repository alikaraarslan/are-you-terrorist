import { Progress } from '@nextui-org/react';
import styled from 'styled-components';

type ProgressProps = {
  value: number | any;
};

const ProgressWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;
`;

const ProgressBar: React.FC<ProgressProps> = ({ value }) => {
  return (
    <ProgressWrapper>
      <Progress color="gradient" size="sm" value={value} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
