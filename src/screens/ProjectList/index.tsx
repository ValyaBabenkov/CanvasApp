import React, { useCallback, useState } from 'react';
import {
  GalleryPage,
  GridPage,
} from '@sberdevices/plasma-temple';
import { Header, Spinner, Button, Container, Row } from '@sberdevices/plasma-ui';
import GalleryCard from './ItemList/GalleryCard';
import GridCard from './ItemList/GridCard';
import Error from '../Error';
import { useGetProjectsByNameQuery } from '../../redux/projects/api';
import {itemsFromToGalleryList, itemsFromToGridList} from '../../lib/functions/projects'
 import * as con from '../../constants'


const ProjectList = (props: any) => {
  const { changeState, state, pushScreen, header, ...other} = props;
  const [typeView, setTypeView] = useState('gallery');
  const {data, isLoading, error} = useGetProjectsByNameQuery("");

  const handleClick = useCallback(
    (card: any) => {
      pushScreen('subProjectList', { ...card ?? null });
    },
    [pushScreen]
  );
  const viewStyle: any = {
    grid: (
      <GridPage
        header={header}
        state={itemsFromToGridList(data||[])}
      >
          {(props) => <GridCard {...props}/>}
        </GridPage>
    ),
    gallery: (
      <GalleryPage
        galleryCard={GalleryCard}
        header={header}
        onCardClick={handleClick}
        state={itemsFromToGalleryList(data||[])}
        changeState={changeState}
      />
    ),
  };
  return (
      <Container>
        <Header
            logo={require('../../assets/images/logo.png')}
            logoAlt={con.APP_NAME}
            title={con.APP_NAME}
            subtitle={con.APP_DESCRIPTION}
        >   
       </Header>
            <Row style={{justifyContent: 'flex-end'}}>
              <Button
                disabled={typeView === 'grid' || isLoading || !!error}
                text={'Галерия'}
                onClick={() => setTypeView('grid')}
                pin="square-clear"
              />
              <Button
                disabled={typeView === 'gallery' || isLoading || !!error}
                text={'Списком'}
                onClick={() => setTypeView('gallery')}
                pin="clear-clear"
              />
              <Button
                disabled={true }
                text={'Карта'}
                onClick={() => setTypeView('gallery')}
                pin="clear-square"
              />
              </Row>
        {!data || isLoading ? <Row style={{flex:1,justifyContent:'center', alignItems:'center'}}><Spinner/></Row> : error ? <div>{'Ошибка'}</div> :
            viewStyle[typeView]
        }
      </Container>
    )
}

export default ProjectList