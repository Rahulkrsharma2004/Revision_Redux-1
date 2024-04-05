// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoAction';
import { Button, Input } from '@chakra-ui/react';
import LoginForm from './Login';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Input
            type='text'
            value={title}
            onChange={handleChange}
            placeholder='Write Todo'
          />
          <Button onClick={handleAddTodo}>Add Todo</Button>
        </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
};

export default AddTodo;
