import { points } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import { StackParamsList } from 'src/rotes/AppRotes';
import PointsItem from './PointsItem';
import { style } from './styles';

const ListPoints: React.FC = () => {
  // const [events, setEvents] = React.useState<EventI[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  return (
    <FlatList
      style={style.list}
      contentContainerStyle={style.container}
      accessibilityHint="Lista de pontos do DC"
      data={points}
      keyExtractor={event => String(event.id)}
      renderItem={({ item }) => (
        <PointsItem
          onPress={() => {
            navigation.navigate('Point', { point: item });
          }}
          accessibilityHint="Ponto do DC"
          name={item.name}
          slug={item.slug}
          image={item.image}
        />
      )}
    />
  );
};

export default ListPoints;
