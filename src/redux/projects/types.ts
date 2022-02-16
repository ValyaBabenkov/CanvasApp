import {MediaObject} from '@sberdevices/plasma-temple';

export interface IProject {
  id: string | number;
  label: string;
  position: number;
  image: MediaObject;
  subProjects: any;
  subTitle: string | null;
}
