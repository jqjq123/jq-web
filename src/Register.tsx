import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Login from './Login'; // 确保路径正确

const Register: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const onFinish = (values: any) => {
     console.log('Success:', values);
     setIsRegistered(true); // 设置注册状态为 true
   };

  return (
     <div>
       {isRegistered ? (
         <Login /> // 如果已注册，渲染登录组件
       ) : (
         <Form name="register" onFinish={onFinish}>
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
               Register
             </Button>
           </Form.Item>
         </Form>
       )}
       {isRegistered && <p>Registration successful! Please log in.</p>}
     </div>
   );
};

export default Register;