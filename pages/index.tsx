/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { Button, Spacer, Text } from '@nextui-org/react';
import styled from 'styled-components';
import { useState } from 'react';
import questions from '../public/question.json';
import Question from '../component/question';
import Terrorist from '../component/terrorist';
import SumTerrorist from '../component/SumTerrorist';

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WizardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Home: NextPage = () => {
  const [start, setStart] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [answerActionType, setAnswerActionType] = useState(true);

  const lastQuestion = questions.length + 1 === activeQuestion;
  return (
    <>
      {!answerActionType ? (
        <>
          <Terrorist />
          <Button
            css={{
              margin: '20px auto',
              minWidth: 'max-content',
              padding: '0 30px',
            }}
            size={'xl'}
            color="gradient"
            auto
            onClick={() => {
              setAnswerActionType(true);
              setStart(false);
              setActiveQuestion(1);
            }}
          >
            Baştan Başla 🤙🏻
          </Button>
        </>
      ) : (
        <>
          {lastQuestion ? (
            <>
              <SumTerrorist />
              <Button
                css={{
                  margin: '20px auto',
                  minWidth: 'max-content',
                  padding: '0 30px',
                }}
                size={'xl'}
                color="gradient"
                auto
                onClick={() => {
                  setAnswerActionType(true);
                  setStart(false);
                  setActiveQuestion(1);
                }}
              >
                Baştan Başla 🤙🏻
              </Button>
            </>
          ) : (
            <>
              {!start && (
                <ContainerWrapper>
                  <Text
                    h2
                    css={{
                      textAlign: 'center',
                      color: 'white',
                      letterSpacing: '-0.02em',
                      width: 'calc(80% - 40px)',
                      mx: 'auto',
                    }}
                  >
                    TR serverinde yaşayanlar olarak karşılaşmamız muhtemel
                    sorulara hazır mısın?
                  </Text>
                  <Spacer y={1} />
                  <Button
                    css={{
                      margin: '0 auto',
                      minWidth: 'max-content',
                      padding: '0 30px',
                    }}
                    size={'xl'}
                    color="gradient"
                    onClick={() => setStart(true)}
                  >
                    Başla 🥳
                  </Button>
                </ContainerWrapper>
              )}
              {start && (
                <WizardWrapper>
                  <>
                    {questions
                      .filter((ff) => ff.id === activeQuestion)
                      .map((option, index) => (
                        <div key={index}>
                          <Text
                            h2
                            css={{
                              color: 'white',
                              marginBottom: '10px',
                              textAlign: 'center',
                              letterSpacing: '.2px',
                            }}
                          >
                            {option.title}
                          </Text>
                          <Text
                            h6
                            css={{
                              color: 'white',
                              textAlign: 'center',
                              maxWidth: 'calc(80% - 40px)',
                              margin: '0 auto 20px',
                              letterSpacing: '0.05px',
                            }}
                          >
                            {option.description}
                          </Text>
                          <Question
                            option={option.options}
                            setAnswerActionType={setAnswerActionType}
                            setActiveQuestion={setActiveQuestion}
                            activeQuestion={activeQuestion}
                          />
                        </div>
                      ))}
                  </>
                </WizardWrapper>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
