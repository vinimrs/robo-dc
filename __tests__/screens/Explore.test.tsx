import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppRotes, { StackParamsList } from '../../src/rotes/AppRotes';
import {
  render,
  within,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import { points } from '@constants';
import Point from '../../src/screens/Point';
import { robotServices } from '../../src/services/robotServices';

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('../../src/services/robotServices', () => {
  return {
    robotServices: {
      moveTo: jest.fn(),
    },
  };
});

const mockReturn = {
  ok: true,
  message: 'Deu certo',
};

describe('Dado que o usuário está na página de explorar o DC', () => {
  it('Deve exibir uma lista de no mínimo 3 pontos do DC', () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Explore" />
      </NavigationContainer>
    );

    const { getByAccessibilityHint } = render(component);

    const list = getByAccessibilityHint('Lista de pontos do DC');
    const { getAllByAccessibilityHint } = within(list);
    const items = getAllByAccessibilityHint('Ponto do DC');

    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  it('E clica em um ponto, deve ser redirecionado para a página de informações sobre o ponto', async () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Explore" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const list = getByAccessibilityHint('Lista de pontos do DC');
    const { getAllByAccessibilityHint } = within(list);
    const items = getAllByAccessibilityHint('Ponto do DC');

    const title = items[0].find(el => el.props.testID === 'titulo').props
      .children;

    fireEvent(items[0], 'press');
    const newHeader = screen.getByAccessibilityHint('Nome do ponto do DC');

    expect(newHeader.children[0]).toBe(title);
  });
});

describe('Dado que o usuário está na página de informações sobre um ponto do DC', () => {
  it('Deve exibir as informações do ponto', async () => {
    const component = (
      <NavigationContainer>
        <Point
          navigation={
            {} as NativeStackNavigationProp<StackParamsList, 'Point', undefined>
          }
          route={{
            key: 'Point',
            name: 'Point',
            params: {
              point: points[0],
            },
          }}
        />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const name = getByAccessibilityHint('Nome do ponto do DC');
    const description = getByAccessibilityHint('Descrição do ponto do DC');
    // const image = getByAccessibilityHint('Imagem do ponto do DC');

    expect(name.children[0]).toBe('LE-1');
    expect(description.children[0]).toBe(
      'LE-1 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    );
  });

  it('Ao Clicar no botão "Ir para o local", deve ser redirecionado para a página de movimentação', async () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Point" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const button = getByAccessibilityHint('Botão de ir para o local');

    fireEvent(button, 'press');

    const newHeader = screen.getByAccessibilityHint('Feedback para começar');

    expect(newHeader.children[0]).toBe(
      `Irei te acompanhar até o ${points[0].name}!`,
    );
  });
});

describe('Dado que o usuário está na página de movimentação', () => {
  it('Deve exibir uma mensagem de feedback', async () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Movement" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const feedback = getByAccessibilityHint('Feedback para começar');

    expect(feedback.children[0]).toBe(
      `Irei te acompanhar até o ${points[0].name}!`,
    );
  });

  it('Deve exibir um botão para voltar para a página de informações do ponto', async () => {
    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Point" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const pointButton = getByAccessibilityHint('Botão de ir para o local');

    fireEvent(pointButton, 'press');

    const button = getByAccessibilityHint('Botão de voltar para o ponto');

    fireEvent(button, 'press');

    const newHeader = screen.getByAccessibilityHint('Nome do ponto do DC');

    expect(newHeader.children[0]).toBe(points[0].name);
  });

  it('Ao clicar no botão de confirmação de destino, deve ser redirecionado para a página de estado em movimento', async () => {
    (robotServices.moveTo as jest.Mock).mockReturnValue(mockReturn);

    const component = (
      <NavigationContainer>
        <AppRotes initialScreen="Movement" />
      </NavigationContainer>
    );
    const { getByAccessibilityHint } = render(component);

    const button = getByAccessibilityHint('Botão de confirmação de destino');

    await waitFor(() => {
      fireEvent(button, 'press');
      expect(robotServices.moveTo).toHaveBeenCalled();

      const newHeader = getByAccessibilityHint('Feedback de movimentação');

      expect(newHeader.children[0]).toBe(`Indo para o ${points[0].name}.`);
    });
  });
});
