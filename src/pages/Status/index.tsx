import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {PackageStatus} from '../../components/PackageStatus';
import {fetchPoints} from '../../redux/reducer';

import {Container} from './styles';

export const Status: React.FC = () => {
  const dispatch = useDispatch();

  const {packages}: any = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPoints());
  }, [dispatch]);
  return (
    <Container>
      <FlatList
        data={packages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PackageStatus
            id={item.points.id}
            time={item.points.hour}
            status={item.points.status}
          />
        )}
      />
    </Container>
  );
};
