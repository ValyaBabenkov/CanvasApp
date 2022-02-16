import React from 'react';
import {useGetSubProjectShortStatusQuery} from '../../../redux/subProject/api';
import {Header, Row, Spinner, Col} from '@sberdevices/plasma-ui';
import {ISubProjectId, IShortStatusResponse} from '../../../redux/subProject/types';
import Item from './Item';
import {format, parseISO} from 'date-fns';
import {isEmpty} from 'ramda';

export default (props: ISubProjectId) => {
  const {data, isLoading, error, refetch} = useGetSubProjectShortStatusQuery(props?.itemId);
  const renderContent = (item: IShortStatusResponse | undefined) => {
    if (isEmpty(item)) return null;
    return (
      <Col>
        <Header
          title={`Краткий статус ${
            item?.date ? `на ${format(parseISO(item?.date), 'dd.MM.yyyy')}` : ''
          }`}
        />
        <Col>
          <Item label={'Поставки оборудования и материалов'} value={item?.truck}></Item>
          <Item label={'Текущий статус'} value={item?.currentStatus}></Item>
          <Item label={'Результаты работ за неделю'} value={item?.resultOfWork}></Item>
          <Item label={'Дальнейшие шаги'} value={item?.nextSteps}></Item>
          <Item label={'Контрагенты'} value={item?.contractors}></Item>
          <Item label={'Общая информация'} value={item?.generalInfo}></Item>
        </Col>
      </Col>
    );
  };
  return (
    <>
      {isLoading ? (
        <Row style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner />
        </Row>
      ) : error && !data ? (
        <div>{`Ошибка - ${error}`}</div>
      ) : (
        <Col size={9} sizeXL={9} sizeL={5} sizeM={3} sizeS={2}>
          {renderContent(data)}
        </Col>
      )}
    </>
  );
};
