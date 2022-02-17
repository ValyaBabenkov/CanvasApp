import React from 'react';
import {useGetSubProjectTepQuery} from '../../../redux/subProject/api';
import {
  Header,
  Row,
  Spinner,
  Col,
  Cell,
  TextBox,
  Headline4,
  Caption,
  ParagraphText1,
} from '@sberdevices/plasma-ui';
import {ISubProjectId, ITep} from '../../../redux/subProject/types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5rem;
`;
const ContainerItem = styled.div`
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.06);
`;
const Filler = styled(Cell)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const Title = styled(ParagraphText1)``;
const RightContainer = styled.div`
  display: block;
  padding-left: 0.5rem;
  min-width: 60px;
`;
const Value = styled(Headline4)``;
const Unit = styled(Caption)`
  text-transform: uppercase;
`;
// text-transform: uppercase;
export default (props: ISubProjectId) => {
  const {data, isLoading, error, refetch} = useGetSubProjectTepQuery(props?.itemId);

  const renderContent = (items: ITep[] | undefined) => {
    if (!items?.length) return null;
    return (
      <Col size={5} sizeXL={3} sizeM={3}>
        <Header title={'ТЭП'} />
        <ContainerItem>
          {items?.map(({title, value, unit}, i) => (
            <Filler
              key={title}
              tabIndex={0}
              outlined
              content={<Title>{title}</Title>}
              contentRight={
                <RightContainer>
                  <Value>{value}</Value>
                  <Unit>{unit}</Unit>
                </RightContainer>
              }
            />
          ))}
        </ContainerItem>
      </Col>
    );
  };
  return (
    <>
      {isLoading ? (
        <Row style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner />
        </Row>
      ) : error && !data ? (
        <div>{`Ошибка - ${error}`}</div>
      ) : (
        renderContent(data)
      )}
    </>
  );
};
