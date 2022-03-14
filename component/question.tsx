import { Card, Text } from '@nextui-org/react';
import styled from 'styled-components';
import questions from '../public/question.json';

type Props = {
  option: {
    id: number | any;
    title: string | any;
    description: string | any;
    action: boolean | any;
  }[];
  activeQuestion: number | any;
  percentage?: number | any;
  setAnswerActionType: (type: boolean | any) => void | any;
  setActiveQuestion: (type: boolean | any) => void | any;
  setPercentage: (type: number | any) => void | any;
};
const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 100%;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuestionTitleWrapper = styled(Text)`
  text-align: center;
`;
const QuestionDescriptionWrapper = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 35px;
  width: 100%;
`;

const CardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(to right, #ffd194, #70e1f5);
  width: 100%;
`;

const Question: React.FC<Props> = ({
  option,
  setAnswerActionType,
  setActiveQuestion,
  setPercentage,
  percentage,
  activeQuestion,
}) => {
  return (
    <QuestionWrapper>
      {option.map((m, index) => (
        <CardWrapper
          key={index}
          clickable
          css={{
            w: '100%',
            h: '160px',
            '@sm': {
              width: '350px !important',
              flexDirection: 'row',
            },
          }}
          onClick={() => {
            setAnswerActionType(m.action);
            if (!m.action) {
              setActiveQuestion(1);
            }
            setActiveQuestion(m.action === true && activeQuestion + 1);
            setPercentage(
              m.action ? percentage - 100 / questions.length : percentage
            );
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
