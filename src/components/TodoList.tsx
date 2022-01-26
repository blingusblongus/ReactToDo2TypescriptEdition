import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Todo } from './models/Todo';


export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
