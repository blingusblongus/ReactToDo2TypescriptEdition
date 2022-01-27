import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Todo } from '../models/Todo';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let fontSize = 25;

export default function TodoItem({ todo, todos, setTodos }: Props) {
  const wrinkledPaper = require('../images/wrinkled-paper.jpeg');
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
  }

  return (
    <ImageBackground source={wrinkledPaper} 
      resizeMode="cover" 
      style={styles.image}
      imageStyle={styles.image}>
    <View style={styles.todo}>
        <Text style={styles.todoText}>{todo.todo}</Text>
        <View style={styles.flex}>
          <Icon name="check" size={fontSize * 1.3}></Icon>
          <Icon name="edit" size={fontSize * 1.3}></Icon>
          <Icon name="delete" size={fontSize * 1.3}
            onPress={() => deleteTodo(todo.id)}></Icon>
        </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  todo: {
    // backgroundColor: '#c5c7f0',
    borderRadius: 6,
    // borderWidth: 1,
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: fontSize,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    // flex: 1,
    // justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(50,50,100, .5)',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
  }
});
