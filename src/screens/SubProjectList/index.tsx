import React from 'react';
import {
  GalleryCardParams,
  GalleryCardProps,
  GalleryPage,
  PageComponent,
} from '@sberdevices/plasma-temple';
import { Project, PageProps, AppState } from '../../types';
import {
  Button,
  Card,
  CardBody,
  CardContent,
  CardFootnote1,
  CardHeadline1,
  CardMedia,
  Row,
} from '@sberdevices/plasma-ui';

const SubProjectList = (props: any) => {
  const { pushScreen, ...other } = props;
  console.log(other)
  const onClose = () => {
    pushScreen('projectList');
  };
  return (
    <>
      <Row>{'123213'}</Row>
      <Button onClick={onClose}>{'Обратно'}</Button>
    </>
  );
};

export default SubProjectList;
