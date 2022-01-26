import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Todo } from '../models/Todo';

type Props = {
    todo: Todo;
}

export default function TodoItem({todo} : Props) {
  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{todo.todo}</Text>
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
  },
  todoText: {
    fontSize: 25,
  }
});
