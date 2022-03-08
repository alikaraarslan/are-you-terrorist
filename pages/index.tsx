/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { Button, Spacer, Text } from '@nextui-org/react';
import styled from 'styled-components';
import { useState } from 'react';
import questions from '../public/question.json';
import Question from './question';

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

  return (
    <>
      {!start && (
        <ContainerWrapper>
          <Text
            h1
            css={{ textAlign: 'center', p: 4, color: 'white', fontSize: '6vw' }}
          >
            Let's go!
          </Text>
          <Spacer y={1} />
          <Button
            css={{
              fontSize: '30px',
              padding: '30px',
              bg: '#6EBF8B',
              margin: '0 auto',
            }}
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
                    margin: '0 auto 40px',
                    letterSpacing: '0.05px',
                  }}
                >
                  {option.description}
                </Text>
                <Question option={option.options} />
              </div>
            ))}
        </WizardWrapper>
      )}
    </>
  );
};

export default Home;
