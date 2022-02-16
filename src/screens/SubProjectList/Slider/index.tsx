import React, {useState} from 'react'
import { useGetSubProjectSliderQuery } from '../../../redux/subProject/api';
import {Header, Col, Row, Spinner, CardMedia,TextBox, CardParagraph2, Image,Headline4, Carousel, CarouselGridWrapper, CarouselCol, Card, CardBody, CardContent  } from '@sberdevices/plasma-ui'
import {ISubProjectId, ISlider} from '../../../redux/subProject/types'
import styled from 'styled-components';

const ColCarousel = styled(CarouselCol)`
  padding: 0.5rem;
  background-color: rgba(255,255,255,0.06);
  border-radius: 1.5rem;
  margin: 0.5rem
`

const TitleContainer = styled(TextBox)`
margin: 1rem;
`

const Title = styled(CardParagraph2)`
font-size: 12px;
max-width: 15.5rem;
`;

export default (props:ISubProjectId)  => {
    const [index, setIndex] = useState(0);
    const {data, isLoading, error, refetch} = useGetSubProjectSliderQuery(props?.itemId)

    const renderContent = (items:ISlider[]|undefined) => {
      if(!items?.length) return null;
      return (
        <>
            <Header title={'Слайдер'} />
            <CarouselGridWrapper>
              <Carousel
                tabIndex={0}
                axis="x"
                index={index}
                scrollSnapType="mandatory"
                detectActive={false}
            >
                {items?.map(({ title, image }, i) => (
                <ColCarousel key={`item:${i}`}>
                    <Card key={`item:${i}`} style={{ width: '17.5rem'}} tabIndex={0} outlined scaleOnFocus>
                        <CardBody>
                            <CardMedia
                                src={image}
                                ratio="2 / 1"
                            />
                        </CardBody>
                </Card>
                  <TitleContainer>
                    <Title mt="2x" lines={2}>
                          {title}
                      </Title>
                  </TitleContainer>
            </ColCarousel>))}
              </Carousel>
            </CarouselGridWrapper>
         </>
        )
    }
  return (
    
        <>
        {isLoading ? 
            <Row style={{flex:1,justifyContent:'center', alignItems:'center'}}><Spinner/></Row> 
            : (error && !data) 
            ? <div>{`Ошибка - ${error}`}</div> 
            : <Row><Col size={12}>{renderContent(data)}</Col></Row>
            }
        </>
            )}
      
 