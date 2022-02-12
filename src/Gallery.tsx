import React from 'react';
import {
  GalleryCardParams,
  GalleryCardProps,
  GalleryPage,
} from '@sberdevices/plasma-temple';
import { Film, PageProps, AppState } from './types';
import {
  Card,
  CardBody,
  CardContent,
  CardFootnote1,
  CardHeadline1,
  CardMedia,
} from '@sberdevices/plasma-ui';

const createDataObject = (
  type: string,
  index: number
): GalleryCardParams<Film> => ({
  id: String(index),
  label: 'Первый фильм',
  name: 'Первый фильм',
  position: 1,
  image: {
    src: 'https://via.placeholder.com/400x600',
  },
  poster: '',
  rating: 4.5,
  genre: type,
});

export const getInitialProps = async (): Promise<AppState['gallery']> => {
  return {
    activeGalleryIndex: 0,
    gallery: [
      {
        activeCardIndex: 0,
        id: 'main',
        title: 'Галерея фильмов',
        items: Array.from({ length: 5 }, (_, i) =>
          createDataObject('Новинка', i)
        ),
      },
    ],
  };
};

const CustomCard: React.FC<GalleryCardProps<Film>> = ({ card, focused }) => {
  const src = Array.isArray(card.image.src)
    ? card.image.src[0]
    : card.image.src;

  return (
    <Card focused={focused} style={{ width: '398px' }}>
      <CardBody>
        <CardMedia src={src} ratio="3 / 4" />
        <CardContent cover>
          <CardHeadline1>{card.label}</CardHeadline1>
          <CardFootnote1>
            Рейтинг: <strong>{card.rating}</strong>
          </CardFootnote1>
          <CardFootnote1>
            Жанр: <strong>{card.genre}</strong>
          </CardFootnote1>
        </CardContent>
      </CardBody>
    </Card>
  );
};

export const Gallery: React.FC<PageProps<'gallery'>> = (props) => {
  const onCardClickHandler = (_val: Film) => {};

  return (
    <GalleryPage
      header={props.header}
      state={props.state}
      changeState={props.changeState}
      onCardClick={onCardClickHandler}
      galleryCard={CustomCard}
    />
  );
};

export default Gallery;
