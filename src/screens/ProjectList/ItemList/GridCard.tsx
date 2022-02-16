import React, { FC,useCallback } from 'react';
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
  const {image, position, text, onClick} = props
  const srcImg = image?.src || ""
  return (
    <Card
      //onClick={handleClick}
      style={{ width: '22.5rem', margin: '0.75rem' }}
      tabIndex={0}
      outlined
      scaleOnFocus
    >
      <CardBody>
        <CardMedia
          src={(srcImg).toString()}
          placeholder={text}
          ratio="2 / 1"
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
