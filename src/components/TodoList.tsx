import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({todos, setTodos} : Props) {

  return (
    <View>
      {
          todos.map(todo => {
              return <TodoItem 
                todo={todo} 
                todos={todos}
                setTodos={setTodos}
                key={todo.id}/>
          })
      }
    </View>
  );
}

const styles = StyleSheet.create({});
