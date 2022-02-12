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

const GalleryCard: FC<GalleryCardProps<Project>> = ({card, focused, index}) => {
  const {id, image, position, label} = card
  return (
    <Card style={{ width: '22.5rem' }} tabIndex={0} outlined scaleOnFocus>
      <CardBody>
        <CardMedia
          src={""}
          placeholder={label}
          ratio="1 / 1"
        />
        <CardContent cover>
          <TextBox>
            <TextBoxBigTitle>{label}</TextBoxBigTitle>
            <TextBoxBiggerTitle> </TextBoxBiggerTitle>
          </TextBox>
        </CardContent>
      </CardBody>
    </Card>
  );
};
export default GalleryCard;
