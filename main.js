import { Tabs, Tab, Icon } from 'react-native-elements'
import React from 'react';
import ReactNative, { StyleSheet, View, Text} from 'react-native';

class MyTabView extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    selectedTab: 'profile',
  }
}

changeTab (selectedTab) {
  this.setState({selectedTab})
}

render() {
  const { selectedTab } = this.state

  return <Tabs>
    <Tab
      titleStyle={{fontWeight: 'bold', fontSize: 10}}
      selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
      selected={selectedTab === 'feed'}
      title={selectedTab === 'feed' ? 'FEED' : null}
      renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
      renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
      onPress={() => this.changeTab('feed')}>
      <Text>Feed tab</Text>
    </Tab>
    <Tab
      titleStyle={{fontWeight: 'bold', fontSize: 10}}
      selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
      selected={selectedTab === 'profile'}
      title={selectedTab === 'profile' ? 'PROFILE' : null}
      renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
      renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
      onPress={() => this.changeTab('profile')}>
      <Text>Profile tab</Text>
    </Tab>
  </Tabs>;
}
}

class MainApp extends React.Component {
  render() {
    return (
      <MyTabView />
    );
  }
}

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default function run() {
  ReactNative.AppRegistry.registerComponent('t3', () => MainApp);
}