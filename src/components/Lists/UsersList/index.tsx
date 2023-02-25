import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, FlatList } from 'react-native';
import { StackParamsList } from '../../../rotes/AppRotes';
import ListItem from '../ListItem';
import { style } from './styles';

const List: React.FC<{
  accessibilityHintList: string;
  accessibilityHintItem: string;
  data: { name: string; src: string; id: string }[];
  navigation: NativeStackNavigationProp<StackParamsList>;
}> = ({ accessibilityHintList, accessibilityHintItem, data, navigation }) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={style.container}
        accessibilityHint={accessibilityHintList}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            accessibilityHint={accessibilityHintItem}
            title={item.name}
            src={item.src}
            onPress={() => {
              navigation.navigate('Features', { userRole: item.name });
            }}
            largeSpacing={true}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default List;
