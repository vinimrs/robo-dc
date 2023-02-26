import { fireEvent, render, within } from '@testing-library/react-native';
import * as React from 'react';
import Home from '../../src/screens/Home';

import AppRoutes from '../../src/rotes/AppRotes';
import { NavigationContainer } from '@react-navigation/native';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Dado que o usuário está na página inicial', () => {
  it('Deve exibir uma lista com 3 opções de usuários', () => {
    const component = (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    const { getByAccessibilityHint } = render(component);

    const list = getByAccessibilityHint('Lista de usuários');
    const { getAllByAccessibilityHint } = within(list);
    const items = getAllByAccessibilityHint('Usuário');

    expect(items.length).toBe(3);
  });

  it('Ao clicar em uma opção, deve ser redirecionado para a página de funcionalidades do usuário', async () => {
    const component = (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    const { getAllByAccessibilityHint, getByText } = render(component);

    const items = getAllByAccessibilityHint('Usuário');
    const title = items[0].find(el => el.props.testID === 'titulo').props
      .children;

    fireEvent(items[0], 'press');
    console.log(getAllByAccessibilityHint('Usuário'));
    const newHeader = getByText(title.toLowerCase());

    expect(newHeader.props.children).toBe(title.toLowerCase());
  });
});
