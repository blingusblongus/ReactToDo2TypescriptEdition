/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';
import TodoList from './src/components/TodoList';
import { Todo } from './src/models/Todo';
import { FAB, ThemeProvider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').height;

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = () => {
    if (todo.length === 0) return;

    setTodos([...todos, {
      todo: todo,
      isDone: false,
      id: Date.now(),
    }])

    setTodo('');
  }

  console.log(todos);

  return (
    <ThemeProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>

          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>

            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ ...styles.linearGradient, height: windowHeight }}>
              <Header/>

              <View style={{ flexDirection: 'column', justifyContent: 'center', }}>

                <TextInput
                  style={styles.input}
                  onChangeText={setTodo}
                  value={todo}
                  placeholder='Task Goes Here' />

                <FAB
                  style={styles.addBtn}
                  icon={{ name: 'add', color: 'white' }}
                  color="green"
                  onPress={addTask}
                />

              </View>

              <TodoList todos={todos} setTodos={setTodos} />
            </LinearGradient>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    position: 'relative',
    fontSize: 25,
    backgroundColor: 'white',
  },
  addBtn: {
    margin: 'auto',
    marginRight: 20,
    position: 'absolute',
    right: 8,
  },
  circleBtn: {
    backgroundColor: '#d5ebc0',
    width: 50,
    height: 50,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
  },
  btnText: {
    alignSelf: 'center',
  },
  backgroundStyle: {
    position: 'absolute',
    zIndex: 1,
    width: 100,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    zIndex: 5
  },
});

export default App;