import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../models/Todo';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let fontSize = 20;

  const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const wrinkledPaper = require('../images/wrinkled-paper.jpeg');
  const [edit, setEdit] = useState<boolean>(false);
  const [editVal, setEditVal] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const deleteTodo = () => {
    setTodos(todos.filter(t => {
      return t.id !== todo.id;
    }));
  }

  const toggleComplete = () => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) todo.isDone = !todo.isDone;
      return t;
    }))
  }

  const toggleEdit = () => {
    if(edit){
      setTodos(todos.map(t => {
        if(t.id === todo.id) todo.todo = editVal;
        return t;
      }))
    }else{
      setEditVal(todo.todo);
     
    }
    setEdit(!edit);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <ImageBackground source={wrinkledPaper}
      resizeMode="cover"
      style={styles.imgShadow}
      imageStyle={styles.image}
    >
      <View style={[styles.todo, todo.isDone && { backgroundColor: 'rgba(0,120,0,.2)' }]}>
        {
          edit ? <TextInput
            ref={inputRef}
            value={editVal}
            onChangeText={setEditVal}
            onSubmitEditing={toggleEdit}
            style={styles.input}
            ></TextInput>
            :
            <Text style={[styles.todoText, todo.isDone && { textDecorationLine: 'line-through' }]}>
              {todo.todo}
            </Text>
        }

        <View style={styles.flex}>
          <Icon name="check" size={fontSize * 1.3}
            onPress={toggleComplete} style={[styles.icon, { marginRight: -9 }]}></Icon>
          <Icon name="edit" size={fontSize * 1.3} style={styles.icon}
            onPress={toggleEdit}></Icon>
          <Icon name="delete" size={fontSize * 1.3} style={styles.icon}
            onPress={deleteTodo}></Icon>
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
    backgroundColor: 'rgba(255,255,255, .15)'
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
  input: {
    fontSize: fontSize,
    backgroundColor: 'white',
    padding: 5,
  }
});

export default TodoItem;