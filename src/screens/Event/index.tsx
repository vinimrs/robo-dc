import { imagesSrc } from '@constants';
import { Footer, Header } from '@global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { StackParamsList } from 'src/rotes/AppRotes';
import Layout from '../../components/Layout';
import {
  Container,
  EventDescription,
  EventDescriptionPrefix,
  EventImage,
  EventProperty,
  EventPropertyImage,
  EventPropertyText,
  EventTitle,
  InfoContainer,
} from './styles';

type EventScreenProps = NativeStackScreenProps<StackParamsList, 'Event'>;

const Event: React.FC<EventScreenProps> = ({ route }) => {
  const params = route.params;

  const handleDate = (date: string) => {
    const dateFormated = new Date(date);
    return `${dateFormated.toLocaleDateString(
      'pt-BR',
    )} - ${dateFormated.toLocaleTimeString('pt-BR')}`;
  };

  return (
    <Layout Header={() => <Header title={params.event.Tipo} />} Footer={Footer}>
      <ScrollView>
        <Container>
          <View>
            <EventImage source={params.event.Imagem} />
            <EventDescription>
              <EventDescriptionPrefix>Resumo: </EventDescriptionPrefix>
              {params.event.Descricao}
            </EventDescription>
          </View>
          <InfoContainer>
            <EventTitle accessibilityHint="Título do evento">
              {params.event.Titulo}
            </EventTitle>
            <EventProperty>
              <EventPropertyImage source={imagesSrc.calendar} />
              <EventPropertyText>
                {handleDate(params.event.Data)}
              </EventPropertyText>
            </EventProperty>
            <EventProperty>
              <EventPropertyImage source={imagesSrc.location} />
              <EventPropertyText>{params.event.Local}</EventPropertyText>
            </EventProperty>
          </InfoContainer>
        </Container>
      </ScrollView>
    </Layout>
  );
};

export default Event;
