import React from 'react';
import {ParagraphText1, Headline4} from '@sberdevices/plasma-ui';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom 2.0rem;
`;
const Filler = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 1rem 1rem;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
`;
const Label = styled(Headline4)`
  font-size: 16px;
  margin: 0rem 0.5rem 0.5rem 0rem;
`;
const Value = styled(ParagraphText1)`
  line-height: 1.6rem;
  font-size: 16px;
  white-space: pre-wrap;
`;
export default (props: any) => {
  const {label, value} = props;
  return (
    (value || value !== '') && (
      <Container>
        <Label>{label}</Label>
        <Filler>
          <Value>{value}</Value>
        </Filler>
      </Container>
    )
  );
};
