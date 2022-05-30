import React, { useEffect, useRef } from 'react';
import { Input, Button } from 'antd';

export default function TaskInput({ addNewTask, value, setValue }) {

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  })

  const addTask = () => {
    if (value) {
      addNewTask(value);
      setValue('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addTask();
      e.preventDefault()
    }
  };

  return (
    <>
      <Input
        style={{
          width: 'calc(100% - 200px)',
          borderRadius: '5px 0 0 5px',
          boxShadow: '0 3px 15px #0000001a',
          border: '1px solid white',
        }}
        placeholder="Add a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDownCapture={handleEnter}
        ref={inputRef}
      />
      <Button
        onClick={addTask}
        type="primary"
        style={{
          backgroundColor: 'rgb(0, 150, 153)',
          borderColor: 'rgb(0, 150, 153)',
          borderRadius: '0 5px 5px 0',
          boxShadow: '0 3px 15px #0000001a',
        }}>
        Add task
      </Button>
    </>
  );
}
