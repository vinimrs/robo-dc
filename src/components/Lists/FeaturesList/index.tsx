import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { StackParamsList } from '../../../rotes/AppRotes';
import ListItem from '../ListItem';
import { FlatList } from 'react-native';
import { style } from './styles';

const List: React.FC<{
  accessibilityHintList: string;
  accessibilityHintItem: string;
  data: { name: string; src: any; id: string; route: 'Events' | 'Explore' }[];
  navigation: NativeStackNavigationProp<StackParamsList>;
  // headerTitle: string;
}> = ({
  accessibilityHintList,
  accessibilityHintItem,
  data,
  navigation,
  // headerTitle,
}) => {
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
              navigation.navigate(item.route);
            }}
          />
        )}
        // ListHeaderComponent={() => <Header userRole={headerTitle} />}
      />
    </View>
  );
};

export default List;
