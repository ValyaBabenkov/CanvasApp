import React from 'react'
import { useGetSubProjectTepQuery } from '../../../redux/subProject/api';
import {Header, Row, Spinner, Col, Cell ,TextBox} from '@sberdevices/plasma-ui'
import {ISubProjectId, ITep} from '../../../redux/subProject/types'
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 0.5rem;
`;

const Filler = styled(Cell)`
        box-sizing: border-box;
        display: flex;
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: rgba(255,255,255,0.06);
    `;

export default (props:ISubProjectId)  => {
    const {data, isLoading, error, refetch} = useGetSubProjectTepQuery(props?.itemId)

    const renderContent = (items:ITep[]|undefined) => {
      if(!items?.length) return null;
      return (
        <Col>
          <Header title={'ТЭП'} />
          {items?.map(({ title, value, unit}, i) => (
            <Container key={title}>
              <Filler
                  key={title}
                  tabIndex={0}
                  outlined
                  content={<TextBox title={title}/>}
                  contentRight={<TextBox size={"l"} title={value} caption={unit}/>}
              />
            </Container>
          ))}
        </Col>
        )
    }
  return (
    <>
    {isLoading ? 
        <Row style={{flex:1,justifyContent:'center', alignItems:'center'}}><Spinner/></Row> 
        : (error && !data) 
        ? <div>{`Ошибка - ${error}`}</div> 
        : <Col size={3} sizeXL={3} sizeL={3} sizeM={3} sizeS={2}>{renderContent(data)}</Col>
        }
    </>
  )
}