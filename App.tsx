import React, {Component, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}: {navigation: any}) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        <Text>You clicked me {count} times</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {count: count})}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}: {route: any; navigation: any}) {
  const count = route.params?.count ?? 0;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>You clicked {count} times!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
