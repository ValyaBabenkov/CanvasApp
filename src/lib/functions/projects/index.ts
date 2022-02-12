import {
    GalleryCardParams,
  } from '@sberdevices/plasma-temple';
  import { Project } from '../../../types';
  

  export const itemsFromToGalleryList = (items:any) => {
      return {
        activeGalleryIndex: 0,
        gallery: [
        {
            activeCardIndex: 0,
            id: 'main',
            title: ' ',
            items: dataObject(items.data),
        },
        ],
    };
}
export const itemsFromToGridList = (items:any) => {
  const data = {items: items.data.map((it:any, index:number)=>({
    id: it.id,
    text: it.title,
    position: index + 1,
    image: {
      src: it.imageUrl,
    },
    subProjects: it.subProjects,
    subTitle: it.subTitle,
  }))}
  return data
}
const dataObject = (items:any): GalleryCardParams<Project> => {
  return items.map((it:any, index:number)=>({
      id: it.id,
      label: it.title,
      position: index + 1,
      image: {
          src: it.imageUrl,
      },
      subProjects: it.subProjects,
      subTitle: it.subTitle,
  }))};

  