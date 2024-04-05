// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoAction';
import { Button, Input } from '@chakra-ui/react';

const AddTodo = () => {
  const [title, setTitle] = useState('');
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
      <Input
        variant='outline'
        placeholder='Write Todo'
        value={title}
        onChange={handleChange}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </div>
  );
};

export default AddTodo;
