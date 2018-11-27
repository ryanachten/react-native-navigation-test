import React, { Component } from 'React';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(() => [])}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
