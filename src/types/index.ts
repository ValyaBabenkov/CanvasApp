import {
    GalleryPageState,
    GridPageState,
    PageComponent,
    Page,
    MediaObject
  } from "@sberdevices/plasma-temple";
  
  export interface AppState {
    projectList: GalleryPageState<Project>|GridPageState;
    subProjectList: GalleryPageState<Project>;
    error: {
      status: string;
      message?: string;
    };
    gallery: GalleryPageState<Film>;
  }

  export interface Project {
    id: string | number,
    label: string,
    position: number,
    image: MediaObject,
    subProjects: any,
    subTitle: string|null,
  }
  export interface AppParams {
    projectsList: void;
    gallery: void;
  }



  export interface Film {
    id: string;
    name: string;
    poster: string;
    genre: string;
    rating: number;
  }
  

  
  export type PageProps<K extends keyof AppState> = React.ComponentProps<
    PageComponent<AppState, K, AppParams>
  >;
  type Lazy = typeof Page["lazy"];
  type LazyResult = ReturnType<Parameters<Lazy>[0]>;
  type InferredModule = LazyResult extends Promise<infer M> ? M : void;
  export type GetInitialProps = InferredModule["getInitialProps"];
  