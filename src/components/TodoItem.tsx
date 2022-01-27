import { StyleSheet, Text, View } from 'react-native';
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

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
  }

  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{todo.todo}</Text>
      <View style={styles.flex}>
        <Icon name="check" size={fontSize * 1.3}></Icon>
        <Icon name="edit" size={fontSize * 1.3}></Icon>
        <Icon name="delete" size={fontSize * 1.3}
          onPress={() => deleteTodo(todo.id)}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#c5c7f0',
    borderRadius: 6,
    borderWidth: 1,
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
  }
});
