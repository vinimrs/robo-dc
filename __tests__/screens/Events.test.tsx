import * as React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react-native';
import Events from '../../src/screens/Events';
import { NavigationContainer } from '@react-navigation/native';
import AppRotes from '../../src/rotes/AppRotes';
import { mockEvents } from '../../src/common/mocks';
import { eventServices } from '../../src/services/eventServices';

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('../../src/services/eventServices', () => {
  return {
    eventServices: {
      getAllEvents: jest.fn(),
      getNEvents: jest.fn(),
    },
  };
});

describe('Dado que o usuário está na página de eventos', () => {
  it('Deve exibir a lista de eventos', async () => {
    (eventServices.getNEvents as jest.Mock).mockReturnValue(mockEvents);

    const component = (
      <NavigationContainer>
        <Events />
      </NavigationContainer>
    );
    render(component);
    expect(eventServices.getNEvents).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const list = screen.getByAccessibilityHint('Lista de eventos');
      const { getAllByAccessibilityHint } = within(list);
      const items = getAllByAccessibilityHint('Evento');

      expect(items.length).toBeGreaterThan(9);
    });
  });

  it('Deve exibir a lista de eventos vazia, se não houver eventos', async () => {
    (eventServices.getNEvents as jest.Mock).mockReturnValue([]);

    const component = (
      <NavigationContainer>
        <Events />
      </NavigationContainer>
    );
    render(component);

    await waitFor(() => {
      expect(eventServices.getNEvents).toHaveBeenCalled();

      const list = screen.getByAccessibilityHint('Lista de eventos vazia');
      const { getByAccessibilityHint } = within(list);
      const title = getByAccessibilityHint('Feedback');

      expect(title.children[0]).toBe('Nenhum evento encontrado...');
    });
  });

  it('E clica em um evento, deve ser redirecionado para a página de detalhes', async () => {
    (eventServices.getNEvents as jest.Mock).mockReturnValue(mockEvents);

    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Events" />
      </NavigationContainer>
    );
    render(component);

    await waitFor(() => {
      expect(eventServices.getNEvents).toHaveBeenCalled();

      const list = screen.getByAccessibilityHint('Lista de eventos');
      const { getAllByAccessibilityHint } = within(list);
      const items = getAllByAccessibilityHint('Evento');

      const title = items[0].find(el => el.props.testID === 'titulo').props
        .children;

      fireEvent(items[0], 'press');
      const newHeader = screen.getByAccessibilityHint('Título do evento');

      expect(newHeader.children[0]).toBe(title);
    });
  });

  it('A lista de filtros deve ser exibida', async () => {
    (eventServices.getNEvents as jest.Mock).mockReturnValue(mockEvents);

    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Events" />
      </NavigationContainer>
    );
    render(component);

    await waitFor(() => {
      expect(eventServices.getNEvents).toHaveBeenCalled();

      const list = screen.getByAccessibilityHint('Lista de filtros');
      const { getAllByAccessibilityHint } = within(list);
      const items = getAllByAccessibilityHint('Filtro');

      expect(items.length).toBeGreaterThan(1);
    });
  });

  it('E clica em um filtro, deve ser listado os eventos filtrados', async () => {
    (eventServices.getNEvents as jest.Mock).mockReturnValue(mockEvents);

    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Events" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    await waitFor(() => {
      expect(eventServices.getNEvents).toHaveBeenCalled();

      const list = getByAccessibilityHint('Lista de filtros');
      const { getAllByAccessibilityHint } = within(list);
      const items = getAllByAccessibilityHint('Filtro');

      expect(items.length).toBeGreaterThan(1);

      // const botao = getByAccessibilityHint('Botão de filtro');

      const filtro = items[0].find(el => el.props.testID === 'filtro').props
        .accessibilityHint;
      fireEvent(items[0], 'press');
      // fireEvent(botao, 'press');

      const listEvents = getByAccessibilityHint('Lista de eventos');
      const { getAllByAccessibilityHint: getAllByHint } = within(listEvents);
      const itemsEvents = getAllByHint('Evento');

      expect(
        itemsEvents.every(el => {
          return el.props.testID === filtro;
        }),
      ).toBeTruthy();
    });
  });
});
