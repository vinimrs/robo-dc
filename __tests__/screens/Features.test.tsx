import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fireEvent, render, within } from '@testing-library/react-native';
import * as React from 'react';
import AppRotes, { StackParamsList } from '../../src/rotes/AppRotes';
import Features from '../../src/screens/Features';

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Dado que o usuário está na página de funcionalidades', () => {
  it('Deve exibir uma lista de no mínimo 2 funcionalidades', () => {
    const component = (
      <NavigationContainer>
        <Features
          navigation={
            {} as NativeStackNavigationProp<
              StackParamsList,
              'Features',
              undefined
            >
          }
          route={{
            key: 'Features',
            name: 'Features',
            params: { userRole: 'Visitante' },
          }}
        />
      </NavigationContainer>
    );

    const { getByAccessibilityHint } = render(component);

    const list = getByAccessibilityHint('Lista de funcionalidades');
    const { getAllByAccessibilityHint } = within(list);
    const items = getAllByAccessibilityHint('Funcionalidade');

    expect(items.length).toBeGreaterThanOrEqual(2);
  });

  it('Ao clicar em uma funcionalidade, deve ser redirecionado para a página da funcionalidade', () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Features" />
      </NavigationContainer>
    );

    const { getAllByAccessibilityHint, getByAccessibilityHint } =
      render(component);

    const items = getAllByAccessibilityHint('Funcionalidade');

    fireEvent(items[0], 'press');
    const newHeader = getByAccessibilityHint('Escolha um evento');

    expect(newHeader.children[0]).toBe('Escolha um evento para você!');
  });
});
