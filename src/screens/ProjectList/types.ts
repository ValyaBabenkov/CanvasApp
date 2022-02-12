import {
    MediaObject
  } from "@sberdevices/plasma-temple";
  
  export interface Project {
    id: string | number,
    label: string,
    text: string,
    position: number,
    image: MediaObject,
    subProjects: any,
    subTitle: string|null,
  }