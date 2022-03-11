import { Card, Text } from '@nextui-org/react';
import styled from 'styled-components';

type Props = {
  option: {
    id: number;
    title: string;
    description: string;
    action: boolean;
  }[];
  activeQuestion: number;
  setAnswerActionType: (type: boolean | any) => void | any;
  setActiveQuestion: (type: boolean | any) => void | any;
};
const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const QuestionTitleWrapper = styled(Text)`
  text-align: center;
`;
const QuestionDescriptionWrapper = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 35px;
`;

const CardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(to right, #ffd194, #70e1f5);
`;

const Question: React.FC<Props> = ({
  option,
  setAnswerActionType,
  setActiveQuestion,
  activeQuestion,
}) => {
  return (
    <QuestionWrapper>
      {option.map((m, index) => (
        <CardWrapper
          key={index}
          clickable
          css={{ w: '350px', h: '160px' }}
          onClick={() => {
            setAnswerActionType(m.action);
            setActiveQuestion(m.action === true && activeQuestion + 1);
          }}
        >
          <QuestionTitleWrapper h3>{m.title}</QuestionTitleWrapper>
          <QuestionDescriptionWrapper>
            {m.description}
          </QuestionDescriptionWrapper>
        </CardWrapper>
      ))}
    </QuestionWrapper>
  );
};

export default Question;
