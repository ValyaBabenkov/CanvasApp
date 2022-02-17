import React, {useState} from 'react';
import {Header, Container, Col, Row, Headline1} from '@sberdevices/plasma-ui';
import TepContainer from './Teps';
import SliderContainer from './Slider';
import ShortStatusContainer from './ShortStatus';
import {useGetSubProjectByIdQuery} from '../../redux/subProject/api';
import {Spinner} from '@sberdevices/plasma-core';
import ButtonSubProject from '../../shared/ButtonSubProject';

const SubProjectList = (props: any) => {
  const {pushScreen, params, header, ...other} = props;
  const {id, subProjects, label} = params;
  const [active, setActive] = useState(subProjects[0]?.id || 0);
  const [subProjectTitle, setSubProjectTitle] = useState(subProjects[0]?.title || '');
  const {data, isLoading, error, refetch} = useGetSubProjectByIdQuery(active);

  const onClose = () => {
    pushScreen('projectList');
  };

  const onChangeSubProject = (subProjectId: number, title: string) => {
    setActive(subProjectId);
    setSubProjectTitle(title);
    refetch();
  };
  return (
    <>
      <Header
        back
        logo={require('../../assets/images/logo.png')}
        onBackClick={onClose}
        title={label}
      ></Header>
      {isLoading ? (
        <Row style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner />
        </Row>
      ) : error && !data ? (
        <div>{`Ошибка - ${error}`}</div>
      ) : (
        <Row>
          {subProjects.length && (
            <Col sizeXL={2.5} sizeL={4.5} sizeM={6} sizeS={4}>
              {/* <div style={{backgroundColor:'red', width:'100%',height:100}}>{'left'}</div> */}
              <Header title={'Объекты'} />
              {subProjects.map((it: any) => (
                <ButtonSubProject
                  key={it.id}
                  id={it.id}
                  title={it.title}
                  active={it.id === active}
                  onClick={() => onChangeSubProject(it.id, it.title)}
                />
              ))}
            </Col>
          )}
          <Col size={12} sizeXL={9.5} sizeL={3.5} sizeM={6} sizeS={4}>
            {/* <div style={{backgroundColor:'green', width:'100%', height:'100%'}}>{'blue'}</div> */}
            <Headline1 style={{paddingTop: 30}}>{subProjectTitle}</Headline1>
            <SliderContainer itemId={active} />
            <Row>
              <TepContainer itemId={active} />
              <ShortStatusContainer itemId={active} />
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SubProjectList;
