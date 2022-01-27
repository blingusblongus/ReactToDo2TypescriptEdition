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

  const toggleComplete = () => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) todo.isDone = !todo.isDone;
      return t;
    }))
  }

  return (
    <ImageBackground source={wrinkledPaper}
      resizeMode="cover"
      style={styles.imgShadow}
      imageStyle={styles.image}
    >
      <View style={styles.todo}>
        <Text style={styles.todoText}>
          {todo.todo} {todo.isDone && 'ITS DONE'}
        </Text>
        <View style={styles.flex}>
          <Icon name="check" size={fontSize * 1.3}
            onPress={toggleComplete} style={[styles.icon, { marginRight: -9 }]}></Icon>
          <Icon name="edit" size={fontSize * 1.3} style={styles.icon}></Icon>
          <Icon name="delete" size={fontSize * 1.3} style={styles.icon}
            onPress={() => deleteTodo(todo.id)}></Icon>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  todo: {
    borderRadius: 6,
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: fontSize,
    maxWidth: '50%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(50,50,100, .5)',
    margin: 3,
  },
  imgShadow: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    margin: 3,
  },
  icon: {
    marginLeft: 20,
  },
});
