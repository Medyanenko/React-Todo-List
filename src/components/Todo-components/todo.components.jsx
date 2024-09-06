import React, { useState } from "react";
import { Space, Button, Input, List, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { Cover, Center } from "../../patterns/patterns.jsx";
import { ContentArea } from "./todo.styles.jsx";
import noTasksImage from '../../assets/undraw_exams.svg';

const TodoComponents = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task?.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const toggleTask = (taskText) => {
    setTasks(
      tasks.map((task) =>
        task.text === taskText ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Cover as={Center} maxWidth="50rem">
      <ContentArea>
        {tasks.length>0 && <div style={{ textAlign: 'left',}}>Number of tasks: {tasks.length}</div>}
        <Space.Compact style={{ width: "100%" }}>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            onKeyPress={handleKeyPress}
          />
          <Button type="primary" onClick={addTask}>
            Add
          </Button>
        </Space.Compact>
        <div>
          <List
            dataSource={tasks}
            locale={{
              emptyText: (
                <img
                  src={noTasksImage}
                  alt="No tasks"
                  style={{ width: "200px", height: "auto" }} 
                />
              ),
            }} 
            renderItem={(task) => (
              <List.Item key={task.text}>
                <span
                      style={{
                        textAlign: 'left',
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                        color: task.completed ? "grey" : "black",
                      }} 
                    >{task.text}</span>    
                <Space size="large">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.text)}
                  />
                  <DeleteTwoTone onClick={() => deleteTask(task.text)} />
                </Space>
              </List.Item>
            )}
          />
        </div>
      </ContentArea>
    </Cover>
  );
};

export default TodoComponents;
