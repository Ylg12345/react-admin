import React, { useRef } from "react";
import { Form, FormInstance, Input, Button, Space, message } from "antd";
import '../../assets/scss/login.scss'

import { getLogin } from "../../network/login";
import { set } from "../../utils/storage";

const Layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

const Login = () => {

  const formRef = useRef<FormInstance>(null);

  const login = async (form: any) => {

    getLogin(form.name, form.password).then(res => {                    
      const { code, msg } = res.data;
      if (code === 0) {
          const { access_token } = res.data.data;
          set('token', access_token)
      } else {
          message.error(msg);
          return Promise.reject(msg);
      }
    });
  }

  return (
    <div
      className="login"
    >
      <Form
        id='login-form'
        {...Layout}
        onFinish={login}
        ref={formRef}
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[
            {
              required: true,
              message: '用户名不可以为空'
            },
            {
              type: "string",
              min: 2,
              message: '用户名长度不可以小于2位'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '密码不可以为空'
            },
            {
              type: "string",
              min: 2,
              message: '密码长度不可以小于2位'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button 
              type="primary" 
              htmlType="submit"
            >
                登录
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
};


export default Login;