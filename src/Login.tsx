import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setUsername(values.username); // 存储用户名到状态中
    setIsLoggedIn(true); // 设置登录状态为 true
  };

  return (
    <div>
      {isLoggedin ? (
        <p>Welcome, {username}!</p> // 使用状态中的用户名显示欢迎消息
      ) : (
        <Form name="basic" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Login;