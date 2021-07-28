import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {PackageStatus} from '../../components/PackageStatus';

import {IPointData, IPointState} from '../../store/modules/point/types';

import {api} from '../../services/api';

import {Container} from './styles';
import {useEffect} from 'react';
import {Button, FlatList, Text} from 'react-native';
import {useCallback} from 'react';
import {addPoint} from '../../store/modules/point/actions';

export const Status: React.FC = () => {
  const [points, setPoints] = useState<IPointState>();
  const dispatch = useDispatch();

  const handleAddPoint = useCallback(
    (point: IPointData) => {
      dispatch(addPoint(point));
    },
    [dispatch],
  );

  useEffect(() => {
    const getPoints = async () => {
      const response = await (await api.get('points')).data;
      setPoints(response);
    };
    getPoints();
  }, []);
  return (
    <Container>
      <PackageStatus />
      <PackageStatus />
      <PackageStatus />
      <Button
        title="click"
        onPress={() => handleAddPoint(`${new Date().getTime()}`)}
      />
    </Container>
  );
};
