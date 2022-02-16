import React, { FC } from 'react';
import {
  GalleryCardProps,
} from '@sberdevices/plasma-temple';
import { Project } from '../types';
import {
  Card,
  CardBody,
  CardMedia,
  CardContent,
  TextBox,
  TextBoxBigTitle,
  TextBoxBiggerTitle,
} from '@sberdevices/plasma-ui';
import styled from 'styled-components'

const TextContainer = styled(TextBox)`
  display:flex;
  align-items: center;
`
const Position = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
    margin-right: 1rem;
    min-width:2rem;
    min-height:2rem;
    max-width:2rem;
    max-height:2rem;
    border-radius: 1rem;
    background-color: rgba(255,255,255,0.4);
`

const GalleryCard: FC = ({card, focused, index}:any) => {
  const {id, image, position, label} = card
  const srcImg = image?.src || ""
  return (
    <Card key={id} style={{ width: '22.5rem' }} tabIndex={0} outlined scaleOnFocus>
      <CardBody>
        <CardMedia
          src={(srcImg).toString()}
          placeholder={label}
          ratio="2/1"
          
        />
        <CardContent cover>
          <TextContainer>
            <Position>{id}</Position>
            <TextBoxBigTitle>{label}</TextBoxBigTitle>
            <TextBoxBiggerTitle> </TextBoxBiggerTitle>
          </TextContainer>
        </CardContent>
      </CardBody>
    </Card>
  );
};
export default GalleryCard;
