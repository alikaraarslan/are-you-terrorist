/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { Button, Container, Spacer, Text } from '@nextui-org/react';
import styled from 'styled-components';
import { useState } from 'react';
import questions from '../public/question.json';
import Question from '../component/Question';
import Terrorist from '../component/Terrorist';
import SumTerrorist from '../component/SumTerrorist';
import ProgressBar from '../component/Progress';
import Script from 'next/script';

const ContainerWrapper = styled.div``;

const WizardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Home: NextPage = () => {
  const [start, setStart] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [answerActionType, setAnswerActionType] = useState(true);
  const [percentage, setPercentage] = useState(100);

  const lastQuestion = questions.length + 1 === activeQuestion;

  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      direction="column"
      responsive={true}
      sm
      style={{ height: '100vh' }}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FZKQX3L5H7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FZKQX3L5H7');
        `}
      </Script>
      {start && <ProgressBar value={percentage} />}
      {!answerActionType ? (
        <>
          <Terrorist value={percentage} />
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
              setPercentage(100);
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
                  setPercentage(100);
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
                    h3
                    css={{
                      textAlign: 'center',
                      color: 'white',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    TR simülasyonunu yaşayanlar olarak karşılaşmamız muhtemel
                    olan sorulara hazır mısın?
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
                  {questions
                    .filter((ff) => ff.id === activeQuestion)
                    .map((option, index) => (
                      <div key={index} style={{ width: '100%' }}>
                        <Text
                          h3
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
                            marginBottom: '20px',
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
                          setPercentage={setPercentage}
                          percentage={percentage}
                        />
                      </div>
                    ))}
                </WizardWrapper>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
