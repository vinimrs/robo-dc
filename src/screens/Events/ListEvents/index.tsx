import { imagesSrc } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventI } from '@types';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { StackParamsList } from 'src/rotes/AppRotes';
import { eventServices } from '../../../services/eventServices';
import EmptyList from './EmptyList';
import EventsItem from './EventsItem';
import { style } from './styles';

const ListEvents: React.FC<{ filter: string[] | undefined }> = ({ filter }) => {
  const [events, setEvents] = React.useState<EventI[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const filterEvents = (eventsArray: EventI[]) => {
    if (filter) {
      return eventsArray.filter(event => {
        return filter.find(fil => fil === event.Slug) ? true : false;
      });
    }
    return eventsArray;
  };

  useEffect(() => {
    const getEvents = async () => {
      const allEvents = await eventServices.getNEvents(20);
      setEvents(allEvents);
    };

    getEvents();
  }, []);

  return filterEvents(events).length === 0 ? (
    <EmptyList
      accessibilityHint="Lista de eventos vazia"
      image={imagesSrc.dc}
      title="Nenhum evento encontrado..."
    />
  ) : (
    <FlatList
      style={style.list}
      contentContainerStyle={style.container}
      accessibilityHint="Lista de eventos"
      data={filterEvents(events)}
      keyExtractor={event => String(event._id)}
      renderItem={({ item }) => (
        <EventsItem
          onPress={() => {
            navigation.navigate('Event', { event: item });
          }}
          accessibilityHint="Evento"
          description={item.Descricao}
          title={item.Titulo}
          type={item.Slug}
          image={item.Imagem}
        />
      )}
    />
  );
};

export default ListEvents;
