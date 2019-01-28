import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  NavigatorProps,
  RouteType,
} from '../../navigation';

type Props = NavigatorProps & ThemedComponentProps & NavigationScreenProps;

class Home extends React.Component<Props> {

  static navigationOptions = {
    title: 'Home',
  };

  private onItemPress = (route: RouteType) => {
    this.props.navigation.navigate(route.name);
  };

  private extractItemKey = (item: RouteType, index: number): string => {
    return index.toString();
  };

  private renderItem = (info: ListRenderItemInfo<RouteType>): React.ReactElement<TouchableOpacityProps> => (
    <TouchableOpacity
      style={this.props.themedStyle.itemContainer}
      key={info.index}
      onPress={() => this.onItemPress(info.item)}>
      <Text style={this.props.themedStyle.itemText}>{info.item.name}</Text>
    </TouchableOpacity>
  );

  public render(): React.ReactNode {
    return (
      <FlatList
        keyExtractor={this.extractItemKey}
        style={this.props.themedStyle.container}
        data={this.props.routes}
        renderItem={this.renderItem}
      />
    );
  }
}

export const HomeScreen = withStyles(Home, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemContainer: {
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
  },
}));
