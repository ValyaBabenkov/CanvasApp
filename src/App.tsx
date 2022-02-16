import React from 'react';
import { PlasmaApp, Page, OnStartFn } from '@sberdevices/plasma-temple';
import { AppParams, AppState } from './types';
import {assistantParams} from './constants/api'

const headerProps = {
  title: 'Портфель проектов',
  // logo: "/images/logo.png"
};

// После того как ассистент готов к работе открываем экран галереи
const onStart: OnStartFn<AppState, AppParams> = async ({ pushScreen }) => {
  pushScreen('projectList');
};

const ProjectList = Page.lazy(() => import('./screens/ProjectList'));
const SubProjectList = Page.lazy(() => import('./screens/SubProjectList'));

export const App: React.FC = () => {
  return (
    <PlasmaApp
      onStart={onStart}
      assistantParams={assistantParams}
      header={headerProps}
    >
      <Page name="projectList" component={ProjectList} />
      <Page name="subProjectList" component={SubProjectList} />
    </PlasmaApp>
  );
};

export default App;
