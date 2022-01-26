/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { transform } from '@babel/core';
import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  ShadowPropTypesIOS,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';
import { Todo } from './src/components/models/Todo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = () => {
    setTodos([...todos, {
      todo: todo,
      isDone: false,
      id: Date.now(),
    }])
  }

  console.log(todos);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Header></Header>

          <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
            
            <TextInput
              style={styles.input}
              onChangeText={setTodo}
              value={todo}
              placeholder='Task Goes Here'/>

            <Pressable style={styles.addBtn}
              onPress={addTask}>
              <View style={styles.circleBtn}>
                <Text style={styles.btnText}>ADD</Text>
              </View>
            </Pressable>

          </View>

          {todos.map(todo => {
            return <Text key={todo.id}>{todo.todo}</Text>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    position: 'relative'
  },
  addBtn: {
    margin: 'auto',
    marginRight: 20,
    position: 'absolute',
    right: 5,
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
  }
});

export default App;