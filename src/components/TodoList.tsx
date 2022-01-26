import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
}

export default function TodoList({todos} : Props) {

  return (
    <View>
      {
          todos.map(todo => {
              return <TodoItem todo={todo} key={todo.id}/>
          })
      }
    </View>
  );
}

const styles = StyleSheet.create({});
