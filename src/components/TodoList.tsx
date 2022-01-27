import { View } from 'react-native';
import React from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {

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

export default TodoList;