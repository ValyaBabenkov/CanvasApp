import React, { useCallback, useEffect, useState } from 'react';
import {
  useMount,
  GalleryPage,
  GridPage,
} from '@sberdevices/plasma-temple';
import { Project, AppState } from '../../types';
import { Spinner, Row, Button, Container, Header } from '@sberdevices/plasma-ui';
import GalleryCard from './ItemList/GalleryCard';
import GridCard from './ItemList/GridCard';
import Error from '../Error';
import { useGetProjectsByNameQuery } from '../../redux/projects/project.api';
import {itemsFromToGalleryList, itemsFromToGridList} from '../../lib/functions/projects'
 import * as con from '../../constants'

const ProjectList = (props: any) => {
  const { changeState, state, pushScreen, header, ...other } = props;
  const [typeView, setTypeView] = useState('grid');
  const {data, isLoading, error} = useGetProjectsByNameQuery("")

  useEffect(()=>{
    if (data) {
      const dataFromToList = typeView === 'gallery' ? itemsFromToGalleryList(data) : itemsFromToGridList(data)
      console.log("typeView",typeView, dataFromToList)
      changeState(dataFromToList);
    }
  },[data, typeView])



  const handleClick = useCallback(
    (card: Partial<Project>) => {
      pushScreen('subProjectList', { ...card ?? null });
    },
    [pushScreen]
  );


  const viewStyle: any = {
    grid: (
      <GridPage
        header={header}
        state={state}
      >
          {(props) => <GridCard {...props} />}
        </GridPage>
    ),
    gallery: (
      <GalleryPage
        galleryCard={GalleryCard}
        header={header}
        onCardClick={handleClick}
        state={state}
        changeState={changeState}
      />
    ),
  };


  // useMount(() => {
  //   const {data, isLoading, error} = useGetProjectsByNameQuery("")
  //   if (fetchData.data) changeState(fetchData;data);
  //   // const {data, isLoading, error} = useGetProjectsByNameQuery("")

  //   // console.log(data, isLoading, error)
  //   // getProjects(typeView).then((data) => {
  //   //   changeState(data);
  //   // });
  // });
 return (
  <Container>
      <Header
            logo={require('../../assets/images/logo.png')}
            logoAlt={con.APP_NAME}
            title={con.APP_NAME}
            subtitle={con.APP_DESCRIPTION}
        >   
            <Button
              disabled={typeView === 'grid'}
              text={'Галерия'}
              onClick={() => setTypeView('grid')}
              pin="square-clear"
            />
            <Button
              disabled={typeView === 'gallery'}
              text={'Списком'}
              onClick={() => setTypeView('gallery')}
              pin="clear-square"
            />
       </Header>
      {isLoading || !state ?  <Spinner /> : error ? <div>{'Ошибка'}</div> : 
     viewStyle[typeView]}
   
  </Container>
  )
};

export default ProjectList;