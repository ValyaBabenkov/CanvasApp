import {MediaObject} from '@sberdevices/plasma-temple';

export interface ISubProjectId {
  itemId: number;
}

export interface ISubProject {
  id: string | number;
  title: string;
  image: MediaObject;
}
export interface ITep {
  icon: string;
  unitId: string;
  unit: string;
  value: string;
  isActive: boolean;
  title: string;
  id: number;
}
export interface ISlider {
  date: Date;
  isActive: boolean;
  imageUrl?: string;
  image: string;
  title: string;
  id: number;
}

/** Краткий статус. */

export interface IShortStatusResponse {
  date: string;
  contractors: string | null;
  truck: string | null;
  staff: string | null;
  currentStatus: string | null;
  resultOfWork: string | null;
  nextSteps: string | null;
  // risks: ShortStatusRiskResponse[] | null;
  // launch: ShortStatusLaunchResponse[] | null;
  generalInfo: string | null;
  // isDraft: boolean;
  // editor: UserInfoResponse | null;
}
export interface ShortStatusRiskResponse {
  riskDescription: string | null;
  riskEvent: string | null;
  id: number;
}

export interface UserInfoResponse {
  id: number;
  shortName: string | null;
  position: string | null;
  companyId: number | null;
  companyName: string | null;
  sortWeight: number;
  companySortWeight: number;
}

export interface ShortStatusLaunchResponse {
  subProject: string | null;
  date: string;
  id: number;
}
