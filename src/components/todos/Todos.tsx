import React from 'react';
import { Space, Input, List, Typography, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store';
import './index.scss';
import { addTodos, removeTodos } from '../../store/reducers/todos';

const Todos = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);
  const handleAdd = (value) => {
    dispatch(addTodos(value));
  };
  return (
    <div className="container">
      <Input.Search
        size="large"
        style={{ marginBottom: 20 }}
        placeholder="todo.."
        onSearch={handleAdd}
        enterButton="ADD"
      />
      <List
        header={
          <Space size="large">
            <div>
              总数：<Typography.Text>{todos.length}</Typography.Text>
            </div>
            <div>
              未完成：
              <Typography.Text type="success">{todos.filter((item) => item.status === 1).length}</Typography.Text>
            </div>
            <div>
              已完成：
              <Typography.Text type="danger">{todos.filter((item) => item.status === 0).length}</Typography.Text>
            </div>
          </Space>
        }
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text type={item.status ? 'success' : 'danger'} delete={!item.status}>
              {item.name}
            </Typography.Text>
            {item.status === 1 && (
              <Button type="primary" danger onClick={() => dispatch(removeTodos(item.id))}>
                删除
              </Button>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};
export default Todos;
