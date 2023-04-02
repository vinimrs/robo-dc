import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { StackParamsList } from '../../../rotes/AppRotes';
import ListItem from '../ListItem';
import { Container, ListContainer } from './styles';

const List: React.FC<{
  accessibilityHintList: string;
  accessibilityHintItem: string;
  data: { name: string; src: ImageSourcePropType; id: string }[];
  navigation: NativeStackNavigationProp<StackParamsList>;
}> = ({ accessibilityHintList, accessibilityHintItem, data, navigation }) => {
  return (
    <Container>
      <ListContainer accessibilityHint={accessibilityHintList}>
        {[data[0], data[1]].map((item, index) => (
          <ListItem
            key={item.id}
            accessibilityHint={accessibilityHintItem}
            title={item.name}
            src={item.src}
            onPress={() => {
              navigation.navigate('Features', { userRole: item.name });
            }}
            largeSpacing={true}
            last={index === 1}
          />
        ))}
      </ListContainer>
      {[data[2]].map(item => (
        <ListItem
          key={item.id}
          accessibilityHint={accessibilityHintItem}
          title={item.name}
          src={item.src}
          onPress={() => {
            navigation.navigate('Features', { userRole: item.name });
          }}
          largeSpacing={true}
          last={true}
        />
      ))}
    </Container>
  );
};

export default List;
