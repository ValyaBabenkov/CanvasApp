import React, { FC } from 'react';
import {
  Card,
  CardBody,
  CardMedia,
  CardContent,
  TextBox,
  TextBoxBigTitle,
  TextBoxBiggerTitle,
} from '@sberdevices/plasma-ui';
import { Project } from '../../../types';

const GridCard: FC = (props:any) => {
  const {image, position, text} = props
  return (
    <Card
      style={{ width: '22.5rem', margin: '0.75rem' }}
      tabIndex={0}
      outlined
      scaleOnFocus
    >
      <CardBody>
        <CardMedia
          src=""
          placeholder={text}
          ratio="1 / 1"
        />
        <CardContent cover>
          <TextBox>
            <TextBoxBigTitle>{text}</TextBoxBigTitle>
            <TextBoxBiggerTitle> </TextBoxBiggerTitle>
          </TextBox>
        </CardContent>
      </CardBody>
    </Card>
  );
};
export default GridCard;
