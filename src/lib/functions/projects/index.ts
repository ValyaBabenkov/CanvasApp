import {
    GalleryCardParams,
    GalleryPageState,
  } from '@sberdevices/plasma-temple';
  import { IProject } from '../../../redux/projects/types';
  

  export const itemsFromToGalleryList = (items:any):GalleryPageState<IProject> => {
      return {
        activeGalleryIndex: 0,
        gallery: [
        {
            activeCardIndex: 0,
            id: 'main',
            title: ' ',
            items: dataObject(items),
        },
        ],
    };
}
export const itemsFromToGridList = (items:any) => {
  const data = {items: items.map((it:any, index:number)=>({
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
const dataObject = (items:any): GalleryCardParams<IProject>[] => {
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

  